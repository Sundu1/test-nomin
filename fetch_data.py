import requests
from bs4 import BeautifulSoup
import re
import json

products_list = []

for index in range(1, 3):
    response = requests.get(f"https://enomin.mn/t/24273?page={index}")
    soup = BeautifulSoup(response.text, "html.parser")
    products = soup.find_all("div", {"class": "MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-4 MuiGrid-grid-lg-4 css-1hs1yu2"})

    for product in products:
        sku = product.find("div", {"class": "MuiBox-root css-1efcy4n"}).find("a")
        name = product.find("h3", {"class": "title MuiBox-root css-147g3v1"})
        description = product.find("div", {"class": "MuiBox-root css-9xskfy"})
        price = product.find("div", {"class": "MuiBox-root css-qr51gz"})
        image = product.find("img")

        new_obj = {
            "sku": int(re.findall(r'\d+', sku["href"])[0]),
            "name": name.text,
            "description": description.text,
            "price": price.text,
            "image": image["src"],
        }
        
        products_list.append(new_obj)

with open("products_list.json", "w", encoding="utf-8") as file:
    file.write(str(products_list))