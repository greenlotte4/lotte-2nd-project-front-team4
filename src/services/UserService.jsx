import axios from "axios";
import { USER_LOGIN_URI, USER_URI } from "./CommonService";

export const postUserLogin = async (data) => {
  try {
    const response = await axios.post(`${USER_LOGIN_URI}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data); 
    return response.data;
  } catch (err) {
    console.error("Axios Error:", err.response || err.message); 
    throw err;
  }
};

export const postUser = async (data) => {
  try {
    const response = await axios.post(`${USER_URI}`, data);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};