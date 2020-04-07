import axios from "axios";
import { setAlert } from "./alertAction";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  CLEAR_ERROR,
  TOTAL_COUNT
} from "./types";

//register user

export const userRegister = (user, history) => {
  return async dispatch => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const res = await axios.post("api/register", user, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(setAlert("User successfully Registered", "success"));
      history.push("/dashboard");
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };
};

//add link
export const addLink = (link, id) => {
  return async dispatch => {
    try {
      const data = {
        link,
        id
      };
      const config = {
        header: {
          "Content-Type": "application/json"
        }
      };

      axios.post("/api/addlink", data, config);
      dispatch(setAlert("Link successfully added", "success"));
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };
};

//get all users (admin dashboard)
export const getUsers = () => {
  return async dispatch => {
    const res = await axios.get("/api/users");
    dispatch({
      type: TOTAL_COUNT,
      payload: res.data
    });
  };
};

//clear error
export const clearError = () => {
  return async dispatch => {
    dispatch({
      type: CLEAR_ERROR
    });
  };
};
