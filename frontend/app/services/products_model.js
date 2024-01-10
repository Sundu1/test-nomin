import axios from "axios";
import { API_URL } from "../configs/config";

const getProducts = async (setData, search_value) => {
  try {
    const response = await axios.post(`${API_URL}/_admin/products/list`, {
      search_value: search_value,
    });
    const data = await response.data;
    if (data) {
      setData(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export { getProducts };
