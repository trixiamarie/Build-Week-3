import axios from "axios"
import { BEARER_TOKEN, profileBaseURL } from "../Config"

export const getProfileData = (profileId) => {
    return (dispatch, state) => {
        dispatch(clearProfileError());
        dispatch(setProfileLoading());

        axios(profileBaseURL + profileId, {
            headers: {
                "authorization": "Bearer " + BEARER_TOKEN
            }
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res);
                dispatch({type: "GET_PROFILE_DATA", payload: res.data});
                dispatch(endProfileLoading());
            } else {
                console.log("errore");
                dispatch(setProfileError(res.request.status))
            }
        })
        .catch(err => dispatch(setProfileError(err)));
    }
}

export const setProfileError = (errorMsg) => {
    return {
        type: "SET_PROFILE_ERROR",
        payload: errorMsg
      };
}

export const clearProfileError = () => {
    return {
        type: "CLEAR_PROFILE_ERROR"
      };
}

export const setProfileLoading = () => {
    return {
        type: "SET_PROFILE_LOADING"
      };
}

export const endProfileLoading = () => {
    return {
        type: "END_PROFILE_LOADING"
      };
}