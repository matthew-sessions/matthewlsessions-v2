from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from app.utils.auth import AuthHandler
from app.utils.models import User, EmailLogin, EmailValidation
from app.utils.mongo import Mongoify
from app.utils.email import valid_email, EmailHandler
from app.utils.helpers import current_time, delta_validator

router = APIRouter(
    prefix="/auth",
    tags=["auth"],
    responses={404: {"description": "Not found"}},
)

auth_handler = AuthHandler()


@router.post("/register", status_code=201)
async def register(auth_details: User):
    """Handle user registration"""
    user_query = await Mongoify.find_one("users", {"email": auth_details.email})
    # Check if the user is already in DB
    if user_query is not None:
        return JSONResponse(
            status_code=400,
            content={"message": f"Email already taken.", "ok": False},
        )

    password_object = auth_handler.validate_password(auth_details.password)
    # check if password is valid
    if not password_object.valid:
        return JSONResponse(
            status_code=400, content={"message": password_object.message}
        )
    hashed_password = auth_handler.get_password_hash(auth_details.password)
    await Mongoify.insert(
        "users", {"email": auth_details.email, "password": hashed_password}
    )
    return {"status": "created", "ok": True}


@router.post("/login", status_code=201)
async def login(auth_details: User):
    user_query = await Mongoify.find_one("users", {"email": auth_details.email})
    if (user_query is None) or (
        not auth_handler.verify_password(auth_details.password, user_query["password"])
    ):
        return JSONResponse(
            status_code=401,
            content={"message": f"Incorrect email or password", "ok": False},
        )
    token = auth_handler.encode_token(str(user_query["_id"]))
    return {"token": token, "ok": True}


@router.get("/unprotected")
async def unprotected():
    return {"status": "ok", "ok": True}


@router.get("/protected")
async def protected(user_id=Depends(auth_handler.auth_wrapper)):
    return {"name": user_id}


@router.get("/check")
async def protected(email=Depends(auth_handler.auth_wrapper)):
    return {"status": "ok", "ok": True}


@router.post("/emailauth", status_code=201)
async def email_auth(email_details: EmailLogin):
    email = email_details.email
    if not valid_email(email):
        return JSONResponse(
            status_code=401,
            content={"message": f"Must enter a valid email.", "ok": False},
        )
    code = EmailHandler.send(email)
    try:
        await Mongoify.update(
            "users",
            {"email": email},
            {"enter_code": code, "code_generated_time": current_time()},
        )
        return {"status": "ok", "ok": True}
    except Exception as e:
        print(e)
        return JSONResponse(
            status_code=400,
            content={
                "message": "Something went wrong, please try again.",
                "ok": False,
            },
        )


@router.post("/emailvalidation", status_code=201)
async def email_validation(email_details: EmailValidation):
    email = email_details.email
    code = email_details.code
    token = code
    user = await Mongoify.find_one("users", {"email": email})

    if user is None:
        return JSONResponse(
            status_code=400,
            content={
                "message": "Something went wrong, please click resend email.",
                "ok": False,
            },
        )
    user_id = str(user.get("_id"))
    user_code = user.get("enter_code")
    user_code_time = user.get("code_generated_time")

    if code != user_code:
        return JSONResponse(
            status_code=400,
            content={
                "message": "Incorrect code, please click resend and try again.",
                "ok": False,
            },
        )

    if not delta_validator(user_code_time, 300):
        return JSONResponse(
            status_code=400,
            content={
                "message": "Code expired, please click resend code.",
                "ok": False,
            },
        )

    token = auth_handler.encode_token(user_id)
    return {"token": token, "ok": True}
