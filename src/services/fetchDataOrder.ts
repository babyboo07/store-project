import axios from "axios";
import { URL } from "../AppConstants";

const config = {
  headers: {
    " Authorization": "Bearer " + localStorage.getItem("token"),
  },
};

const listOrder = () => {
  try {
    return axios.get(URL + `/order`, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const detailOrder = (id: any) => {
  try {
    return axios.get(URL + `/orderdetail/` + id, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export { listOrder, detailOrder };
