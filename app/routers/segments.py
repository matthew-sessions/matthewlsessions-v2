from fastapi import APIRouter, Depends, HTTPException, File, UploadFile
from fastapi.responses import JSONResponse, HTMLResponse, StreamingResponse
from app.utils.mongo import Mongoify
from app.utils.helpers import current_time, delta_validator
from app.Notion.timers import pull_segments
from app.utils.image_manager import ImageInterface
import random
from starlette.responses import RedirectResponse


router = APIRouter(
    prefix="/api",
    tags=["api"],
    responses={404: {"description": "Not found", "ok": False}},
)


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

@router.get("/upload", response_class=HTMLResponse)
def render():
    return """
    <form action="/api/upload" enctype="multipart/form-data" method="post">
        <input name="file" type="file">
        <input type="submit">
    </form>
    """

@router.post("/upload", response_class=HTMLResponse)
def upload_img(file: UploadFile = File(...)):
    name = file.filename
    f = file.file

    ImageInterface.upload_obj(f, "siteimages", name)
    # res = drive.put(name, f)
    return """
    <form action="/api/upload" enctype="multipart/form-data" method="post">
        <input name="file" type="file">
        <input type="submit">
    </form>
    """