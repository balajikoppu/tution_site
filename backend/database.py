from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId

MONGO_URL =""
client = AsyncIOMotorClient(MONGO_URL)
db = client["tution_site"]

