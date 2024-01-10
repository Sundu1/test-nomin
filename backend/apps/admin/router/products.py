from fastapi import FastAPI, APIRouter
from fastapi import Request, FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging
import os
from dotenv import load_dotenv
from fastapi.encoders import jsonable_encoder
from PIL import Image
from schemas import schemas
import json


app = FastAPI()
load_dotenv()


router = APIRouter(
    prefix="/products",
    tags=["products"],
    responses={404: {"description": "Not found"}},
)


@router.post('/list')
def products_list(search_value: schemas.ProductListSearch):
    with open("data/products_list.json", "r", encoding='utf-8') as file:
        json_data = json.load(file)
    
    print(len(json_data))
    return json_data
    