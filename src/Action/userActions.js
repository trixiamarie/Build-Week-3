import axios from "axios";
import { BEARER_TOKEN, userURL } from "../Config";

export const getUserData = () => {
  return (dispatch, state) => {
    dispatch(clearUserError());
    dispatch(setUserLoading());

    axios(userURL, {
      headers: {
        authorization: "Bearer " + BEARER_TOKEN,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          dispatch({ type: "GET_USER_DATA", payload: res.data });
          dispatch(endUserLoading());
        } else {
          console.log("errore");
          dispatch(setUserError(res.request.status));
        }
      })
      .catch((err) => dispatch(setUserError(err.message)));
  };
};

export const setUserError = (errorMsg) => {
  return {
    type: "SET_USER_ERROR",
    payload: errorMsg,
  };
};

export const clearUserError = () => {
  return {
    type: "CLEAR_USER_ERROR",
  };
};

export const setUserLoading = () => {
  return {
    type: "SET_USER_LOADING",
  };
};

export const endUserLoading = () => {
  return {
    type: "END_USER_LOADING",
  };
};
