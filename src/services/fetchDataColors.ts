import React from "react";
import axios from "axios";
import { URL } from "../AppConstants";

const config = {
  headers: {
    " Authorization": "Bearer " + localStorage.getItem("token"),
  },
};

const createColor = (data: any) => {
  try {
    axios.post(URL + `/colorcreate`, data, config).then((res) => {
      console.log(res.data);
      window.location.href = "/colors";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const listColor = () => {
  try {
    return axios.get(URL + `/colorlist`, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteColor = (id: any) => {
  try {
    axios.delete(URL + `/colordelete/` + id, config).then((res) => {
      window.location.href = "/colors";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const infoColor = (id: any) => {
  try {
    return axios.get(URL + `/colorinfo/` + id, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const updateColor = (id: any, data: any) => {
  try {
    axios.post(URL + `/colorupdate/` + id, data, config).then((res) => {
      window.location.href = "/colors";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export { createColor, listColor, deleteColor, infoColor, updateColor };
