from pydantic import BaseModel, root_validator
from enum import Enum
from typing import Optional


class ProductListSearch(BaseModel):
    search_value: Optional[str] = ""
    start: Optional[int] = None
    end: Optional[int] = None