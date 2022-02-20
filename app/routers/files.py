from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from app.utils.image_manager import ImageInterface


router = APIRouter(
    prefix="/file",
    tags=["file"],
    responses={404: {"description": "Not found", "ok": False}},
)



@router.get("/{image}")
async def show_image(image: str):
    try:
        bucket = "siteimages"
        signed_url = ImageInterface.generate_url(bucket, f"{image}")
        header = {"s3url": signed_url}
        return JSONResponse(header, headers=header)
    except Exception as e:
        return JSONResponse({"error", str(e)}, status_code=401)