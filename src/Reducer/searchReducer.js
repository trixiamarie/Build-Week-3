/* import axios from "axios"
import { BEARER_TOKEN, profileBaseURL } from "../Config"

export const getSearchJob = (profileId) => {
    return (dispatch, state) => {
        dispatch(clearSearchError());
        dispatch(setSearchLoading());

        axios(profileBaseURL + profileId, {
            headers: {
                "authorization": "Bearer " + BEARER_TOKEN
            }
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res);
                dispatch({type: "GET_SEARCH_DATA", payload: res.data});
                dispatch(endSearchLoading());
            } else {
                console.log("errore");
                dispatch(setSearchError(res.request.status))
            }
        })
        .catch(err => dispatch(setSearchError(err.message)));
    }
}

export const setSearchError = (errorMsg) => {
    return {
        type: "SET_SEARCH_ERROR",
        payload: errorMsg
      };
}

export const clearSearchError = () => {
    return {
        type: "CLEAR_SEARCH_ERROR"
      };
}

export const setSearchLoading = () => {
    return {
        type: "SET_SEARCH_LOADING"
      };
}

export const endSearchLoading = () => {
    return {
        type: "END_SEARCH_LOADING"
      };
} */