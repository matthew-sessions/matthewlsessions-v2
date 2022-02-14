from motor.motor_asyncio import AsyncIOMotorClient
from decouple import config
from fastapi.encoders import jsonable_encoder

MONGO_USER = config("MONGO_USER")
MONGO_PASSWORD = config("MONGO_PASSWORD")
DB_URI = config("MONGO_URI")
CONNECTION_STRING = f"mongodb://{MONGO_USER}:{MONGO_PASSWORD}@{DB_URI}"


class Mongoify:
    CLIENT = AsyncIOMotorClient(CONNECTION_STRING)
    DB = CLIENT.housing

    @classmethod
    async def insert(cls, table, data):
        data = jsonable_encoder(data)
        result = await cls.DB[table].insert_one(data)
        return result

    @classmethod
    async def find_one(cls, table, query):
        return await cls.DB[table].find_one(query)

    @classmethod
    async def find(cls, table, query, limit=100):
        res = cls.DB[table].find(query)
        await res.to_list(limit)

    @classmethod
    async def find_specific(
        cls, table: str, query: dict, fields: list, limit: int = 100, pass_id = False
    ) -> dict:
        fields = {k: 1 for k in fields}
        fields["_id"] = pass_id
        res = cls.DB[table].find(query, fields)
        return await res.to_list(limit)

    @classmethod
    async def update(cls, table, query, update, upsert=True):
        return await cls.DB[table].update_one(query, {"$set": update}, upsert=upsert)
