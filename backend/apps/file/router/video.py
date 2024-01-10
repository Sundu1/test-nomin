from fastapi import FastAPI, APIRouter, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from datetime import datetime
from dotenv import load_dotenv
import os
from fastapi.responses import StreamingResponse


app = FastAPI()
load_dotenv()

STATIC_FILE = "static_files"
GIFT_IMAGE = "gift_images"
CATEGORY_IMAGE = "category_images"
PROFILE_IMAGE = "profile_images"
DEFAULT_GIFT = f"{STATIC_FILE}/{GIFT_IMAGE}/default_gift_image.png"
DEFAULT_GIFT_GIVING = f"{STATIC_FILE}/{GIFT_IMAGE}/default_gift_image_giving.png"
DEFAULT_GIFT_PLACEHOLDER = f"{STATIC_FILE}/{GIFT_IMAGE}/default_gift_placeholder.png"
DEFAULT_PROFILE = f"{STATIC_FILE}/{PROFILE_IMAGE}/default.png"


router = APIRouter(
    prefix="/videos",
    tags=["videos"],
    responses={404: {"description": "Not found"}},
)


@router.get('/')
def get():
    path = 'static_files/videos/gmobile_invitation.mp4'
    print('sdfsd')
    
    def iter_file():
        with open(path, 'rb') as f:
            yield from f
    
    return StreamingResponse(iter_file(), media_type="video/mp4")
