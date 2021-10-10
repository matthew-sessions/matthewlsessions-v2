from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import auth
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
app.include_router(auth.router)


@app.get("/")
async def root():
    return {"message": "test"}


@app.on_event("startup")
async def startup_event():
    pass
