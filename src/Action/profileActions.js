import axios from "axios"
import { BEARER_TOKEN, profileBaseURL } from "../Config"

export const getProfileData = (profileId="65b22820913f650018d09540") => {
    console.trace(profileId)
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
        .catch(err => dispatch(setProfileError(err.message)));
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


export const getExperiences = (profileId="65b22820913f650018d09540") => {
    return (dispatch, state) => {
        console.log("SONO NELL'AZIONE");
        dispatch(clearExperiencesError());
        dispatch(setExperiencesLoading());

        axios(`https://striveschool-api.herokuapp.com/api/profile/${profileId}/experiences/`, {
            headers: {
                "authorization": "Bearer " + BEARER_TOKEN
            }
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res);
                dispatch({type: "GET_EXPERIENCES_DATA", payload: res.data});
                dispatch(endExperiencesLoading());
            } else {
                console.log("errore");
                dispatch(setExperiencesError(res.request.status))
            }
        })
        .catch(err => dispatch(setExperiencesError(err.message)));
    }
}


export const setExperiencesError = (errorMsg) => {
    return {
        type: "SET_EXPERIENCES_ERROR",
        payload: errorMsg
      };
}

export const clearExperiencesError = () => {
    return {
        type: "CLEAR_EXPERIENCES_ERROR"
      };
}

export const setExperiencesLoading = () => {
    return {
        type: "SET_EXPERIENCES_LOADING"
      };
}

export const endExperiencesLoading = () => {
    return {
        type: "END_EXPERIENCES_LOADING"
      };
}

