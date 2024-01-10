from fastapi import FastAPI
from .router import image
from .router import video

app = FastAPI()

app.include_router(image.router)
app.include_router(video.router)