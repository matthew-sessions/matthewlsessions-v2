from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import segments, housing, files
import json
from decouple import config
from .utils.housing import DynamicNameSearch
from .utils.mongo import Mongoify


app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(segments.router)
app.include_router(housing.router)
app.include_router(files.router)


@app.get("/")
async def root():
    return {"message": "test"}


@app.on_event("startup")
async def startup_event():
    print("starting up")
    # housing_data = await Mongoify.find_specific(
    #     "housingblobdata",
    #     {},
    #     fields=["regionName", "regionState", "regionType"],
    #     limit=70000,
    #     pass_id=True,
    # )
    # for data in housing_data:
    #     DynamicNameSearch.load_data(data)
