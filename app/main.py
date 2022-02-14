from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import segments
import json
from decouple import config


app = FastAPI()
origins = ["http://localhost:8888"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(segments.router)

@app.get("/")
async def root():
    return {"message": "test"}


@app.on_event("startup")
async def startup_event():
    pass
