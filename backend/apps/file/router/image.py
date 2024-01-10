from fastapi import FastAPI, APIRouter, Request
from datetime import datetime
from dotenv import load_dotenv
import logging
import os

app = FastAPI()
load_dotenv()

STATIC_FILE = "static_files"

router = APIRouter(
    prefix="/images",
    tags=["images"],
    responses={404: {"description": "Not found"}},
)

# Gift send
@router.get('/product/{sku}')
def get(sku: int):
    pass

