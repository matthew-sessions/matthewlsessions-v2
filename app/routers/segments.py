from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from app.utils.mongo import Mongoify
from app.utils.helpers import current_time, delta_validator
from app.Notion.timers import pull_segments
import random
router = APIRouter(
    prefix="/api",
    tags=["api"],
    responses={404: {"description": "Not found", "ok": False}},
)



@router.get("/segments/all", status_code=201)
async def all_segments():
    """Get segments"""
    segments = await Mongoify.find_specific("segments", {}, ["key", "description", "type", "link", "title", "info", "picture"])
    # Check if the user is already in DB
    
    print(random.randint(0,100))
    
    return {"status": "created", "ok": True, "data": segments}

@router.get("/segments/refresh", status_code=201)
async def refresh():
    await pull_segments()
    # Check if the user is already in DB

    
    return {"status": "created", "ok": True}
