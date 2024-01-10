from pydantic import BaseModel, root_validator
from enum import Enum


class ProductListSearch(BaseModel):
    search_value: str | None = ""
    start: int | None = None
    end: int | None = None