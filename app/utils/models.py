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


class Parent(BaseModel):
    type: str
    database_id: str = None
    page_id: str = None

    @property
    def id(self):
        return self.page_id if self.type == "page_id" else self.database_id


class ObjectProperty(BaseModel):
    type: str


class NotionObject(BaseModel):
    object: str = None
    id: str = None
    created_time: str = None
    last_edited_time: str = None
    parent: Parent = None
    properties: dict = None
