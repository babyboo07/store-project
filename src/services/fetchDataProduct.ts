import axios from "axios";
import { URL } from "../AppConstants";

const config = {
  headers: {
    " Authorization": "Bearer " + localStorage.getItem("token"),
  }, 
};

const createProduct = (data: any) => {
  try {
    console.log(data);

    axios.post(URL + "/productcreate", data, config).then((res) => {
      // window.location.href = "/product";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export { createProduct };
