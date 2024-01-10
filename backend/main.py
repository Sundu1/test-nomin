from fastapi import FastAPI
import uvicorn
from fastapi import Request, FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging
from datetime import datetime

from apps.admin.app import app as app_admn
from apps.file.app import app as app_file


app = FastAPI()


origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.mount("/_admin", app_admn)
app.mount("/_file", app_file)


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)