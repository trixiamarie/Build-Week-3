import axios from "axios"
import { BEARER_TOKEN, profileBaseURL } from "../Config"


export const getAllProfilesData = () => {
    return (dispatch, state) => {
        dispatch(clearAllProfilesError());
        dispatch(setAllProfilesLoading());

        axios(profileBaseURL, {
            headers: {
                "authorization": "Bearer " + BEARER_TOKEN
            }
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res);
                dispatch({type: "GET_ALL_PROFILES", payload: res.data});
                dispatch(endAllProfilesLoading());
            } else {
                console.log("errore");
                dispatch(setAllProfilesError(res.request.status))
            }
        })
        .catch(err => dispatch(setAllProfilesError(err.message)));
    }
}

export const setAllProfilesError = (errorMsg) => {
    return {
        type: "SET_ALL_PROFILES_ERROR",
        payload: errorMsg
      };
}

export const clearAllProfilesError = () => {
    return {
        type: "CLEAR_ALL_PROFILES_ERROR"
      };
}

export const setAllProfilesLoading = () => {
    return {
        type: "SET_ALL_PROFILES_LOADING"
      };
}

export const endAllProfilesLoading = () => {
    return {
        type: "END_ALL_PROFILES_LOADING"
      };
}