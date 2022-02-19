from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from app.utils.mongo import Mongoify
from app.utils.housing import DynamicNameSearch


router = APIRouter(
    prefix="/api",
    tags=["api"],
    responses={404: {"description": "Not found", "ok": False}},
)


@router.get("/housing/deepsearch/{loc_id}", status_code=201)
async def get_loc(loc_id):
    data = await Mongoify.find_one("housingblobdata", {"_id": int(loc_id)})

    return data


@router.get("/housing/search/{term}")
def search(term):
    print(term)
    return {"results": DynamicNameSearch.search(term)}
