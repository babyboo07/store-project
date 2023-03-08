import React from "react";
import axios from "axios";
import { URL } from "../AppConstants";

const config = {
  headers: {
    " Authorization": "Bearer " + localStorage.getItem("token"),
  },
};

const ListCategory = () => {
  try {
    return axios.get(URL + `/categorylist`, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const getCategoryParent = () => {
  try {
    return axios.get(URL + `/parent`, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const CreateCategory = (data: any) => {
  try {
    axios.post(URL + "/categorycreate", data, config).then((res) => {
      window.location.href = "/category";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const DetailCategory = (id: any) => {
  try {
    return axios.get(URL + `/categorydetail/` + id, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const DeleteCategory = (id: any) => {
  try {
    axios.delete(URL + `/categorydelete/` + id, config).then((res) => {
      window.location.href = "/category";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export { CreateCategory, getCategoryParent, ListCategory, DetailCategory, DeleteCategory };
