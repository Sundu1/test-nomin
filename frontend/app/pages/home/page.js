"use client";

import { getProducts } from "@/app/services/products_model";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { push } = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts, searchValue);
  }, [searchValue]);

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="h-[90%]">
      <div className="bg-white h-[80px] shadow-lg flex justify-center">
        <div className="p-2 relative w-[60em]">
          <div className="absolute top-[34%] left-[2%] pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg
             bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Хайх"
            value={searchValue}
            onChange={handleSearchInput}
            required
          />
        </div>
      </div>
      <div className="flex justify-center p-10 w-full h-full bg-gray-100">
        <div className="w-[1000px] flex justify-center">
          <div>
            <div className="flex flex-wrap pl-10">
              {products.length > 0
                ? products.map((product) => {
                    return (
                      <div
                        key={product.sku}
                        className="m-2 h-[380px] w-[300px] rounded-[15px] bg-white shadow-lg flex flex-col justify-between"
                      >
                        <div className="flex justify-center">
                          <img
                            className="block px-[36px] pt-10"
                            src={product.image}
                          />
                        </div>
                        <div className="h-[100px] px-5 py-5 font-montserrat flex flex-col justify-between">
                          <h3 className="text-[14px] uppercase text-[color: rgb(43, 52, 69)]">
                            {product.name}
                          </h3>
                          <div className="text-[14px] text-gray-500">
                            {product.description &&
                            product.description.length > 30
                              ? product.description.slice(0, 31) + "..."
                              : product.description}
                          </div>
                          <div className="text-blue-500 font-bold py-1">
                            {product.price}
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
