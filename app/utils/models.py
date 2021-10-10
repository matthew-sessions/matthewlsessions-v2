from pydantic import BaseModel, Field
from pymongo import MongoClient
from bson import ObjectId
from typing import Optional
from .types import PyObjectId


class User(BaseModel):
    id: Optional[PyObjectId] = Field(alias="_id")
    email: str
    password: str

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}


class EmailLogin(BaseModel):
    email: str


class EmailValidation(BaseModel):
    email: str
    code: str
