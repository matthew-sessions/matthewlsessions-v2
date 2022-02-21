from fastapi import APIRouter, Depends, HTTPException, File, UploadFile
from fastapi.responses import JSONResponse, HTMLResponse, StreamingResponse
from app.utils.mongo import Mongoify
from app.utils.helpers import current_time, delta_validator
from app.Notion.timers import pull_segments
from app.utils.image_manager import ImageInterface
import random
from starlette.responses import RedirectResponse
import decouple


router = APIRouter(
    prefix="/api",
    tags=["api"],
    responses={404: {"description": "Not found", "ok": False}},
)

KEY = decouple.config("access_key_id")


@router.get("/segments/all", status_code=201)
async def all_segments():
    """Get segments"""
    segments = await Mongoify.find_specific(
        "segments",
        {},
        ["key", "description", "type", "link", "title", "info", "picture"],
        order=[("type", 1), ("orderkey", 1)],
    )

    return {"status": "created", "ok": True, "data": segments}


@router.get("/segments/refresh", status_code=201)
async def refresh():
    await pull_segments()
    # Check if the user is already in DB

    return {"status": "created", "ok": True}

@router.get(f"/upload/{KEY}", response_class=HTMLResponse)
def render():
    return f"""
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/api/upload/{KEY}" enctype="multipart/form-data" method="post">
        <input name="file" type="file">
        <input type="submit">
    </form>
</body>
</html>
    
    """

@router.post(f"/upload/{KEY}", response_class=HTMLResponse)
def upload_img(file: UploadFile = File(...)):
    name = file.filename
    f = file.file

    res = ImageInterface.upload_obj(f, "siteimages", name)

    return f"""
    <form action="/api/upload/{KEY}" enctype="multipart/form-data" method="post">
        <input name="file" type="file">
        <input type="submit">
    </form>
    <div>
    https://ewr1.vultrobjects.com/siteimages/{name}
    </div>
    """