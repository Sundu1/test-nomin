from fastapi import FastAPI, APIRouter
from fastapi import Request, FastAPI
import logging
import os
from PIL import Image
from schemas import schemas
import json
import pandas as pd

app = FastAPI()

router = APIRouter(
    prefix="/products",
    tags=["products"],
    responses={404: {"description": "Not found"}},
)

@router.post('/list')
def products_list(search_object: schemas.ProductListSearch):
    dir_path = "data/products_list.json"
    if os.path.exists(dir_path):
        df = pd.read_json(dir_path)
        pre_removal = search_object.search_value.split(" ")

        values = []
        for index, value in enumerate(pre_removal):
            if index > 0 and value == "":
                continue
            else:
                values.append(value)
        
        filter_value = df.applymap(lambda x: any(str(val).lower().strip() in str(x).lower() for val in values))
        df_new = df[filter_value.any(axis=1)]
        result = df_new.to_json(orient="records")
        return json.loads(result)
    return []


@router.get('/random/list')
def products_list():
    dir_path = "data/products_list.json"
    if os.path.exists(dir_path):
        df = pd.read_json(dir_path)
        df_new = df.sample(3)
        result = df_new.to_json(orient="records")
        return json.loads(result)
    return []
    