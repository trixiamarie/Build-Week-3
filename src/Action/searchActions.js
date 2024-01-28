import axios from "axios";
import {
  BEARER_TOKEN,
  jobsSearchURL,
  companySearchURL,
  categorySearchUrl,
} from "../Config";

export const getSearchJob = () => {
  return (dispatch, getState) => {
    dispatch(clearSearchError());
    dispatch(setSearchLoading());
    console.log(getState().search.query);

    axios(jobsSearchURL, {
      headers: {
        authorization: "Bearer " + BEARER_TOKEN,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          dispatch({ type: "GET_SEARCH_DATA", payload: res.data.data });
          dispatch(endSearchLoading());
        } else {
          console.log("errore");
          dispatch(setSearchError(res.request.status));
        }
      })
      .catch((err) => dispatch(setSearchError(err.message)));
  };
};

export const getSearchQueryJob = () => {
  return (dispatch, getState) => {
    dispatch(clearSearchError());
    dispatch(setSearchLoading());
    console.log(getState());

    axios(jobsSearchURL + getState().search.query, {
      headers: {
        authorization: "Bearer " + BEARER_TOKEN,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          dispatch({ type: "GET_SEARCH_DATA", payload: res.data.data });
          dispatch(endSearchLoading());
        } else {
          console.log("errore");
          dispatch(setSearchError(res.request.status));
        }
      })
      .catch((err) => dispatch(setSearchError(err.message)));
  };
};

export const getSearchCompany = () => {
  return (dispatch, getState) => {
    dispatch(clearSearchError());
    dispatch(setSearchLoading());
    console.log(getState());

    axios(companySearchURL + getState().search.query, {
      headers: {
        authorization: "Bearer " + BEARER_TOKEN,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          dispatch({ type: "GET_SEARCH_DATA", payload: res.data.data });
          dispatch(endSearchLoading());
        } else {
          console.log("errore");
          dispatch(setSearchError(res.request.status));
        }
      })
      .catch((err) => dispatch(setSearchError(err.message)));
  };
};

export const getSearchCategory = () => {
  return (dispatch, getState) => {
    dispatch(clearSearchError());
    dispatch(setSearchLoading());
    console.log(getState());

    axios(categorySearchUrl + getState().search.query, {
      headers: {
        authorization: "Bearer " + BEARER_TOKEN,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          dispatch({ type: "GET_SEARCH_DATA", payload: res.data.data });
          dispatch(endSearchLoading());
        } else {
          console.log("errore");
          dispatch(setSearchError(res.request.status));
        }
      })
      .catch((err) => dispatch(setSearchError(err.message)));
  };
};

export const setSearchQuery =(parola)=>{
    return {
        type: "SET_SEARCH_QUERY",
        payload: parola,
      };
}


export const setSearchError = (errorMsg) => {
  return {
    type: "SET_SEARCH_ERROR",
    payload: errorMsg,
  };
};

export const clearSearchError = () => {
  return {
    type: "CLEAR_SEARCH_ERROR",
  };
};

export const setSearchLoading = () => {
  return {
    type: "SET_SEARCH_LOADING",
  };
};

export const endSearchLoading = () => {
  return {
    type: "END_SEARCH_LOADING",
  };
};
