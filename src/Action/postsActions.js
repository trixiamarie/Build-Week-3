import axios from "axios"
import { BEARER_TOKEN, postsbaseURL } from "../Config"

export const getAllPostsData = () => {
    return (dispatch, state) => {
        dispatch(clearPostsError());
        dispatch(setPostsLoading());

        axios(postsbaseURL, {
            headers: {
                "authorization": "Bearer " + BEARER_TOKEN
            }
        })
        .then(res => {
            if (res.status === 200) {
                console.log(res);
                dispatch({type: "GET_ALL_POSTS", payload: res.data});
                dispatch(endPostsLoading());
            } else {
                console.log("errore");
                dispatch(setPostsError(res.request.status))
            }
        })
        .catch(err => dispatch(setPostsError(err.message)));
    }
}

export const setPostsError = (errorMsg) => {
    return {
        type: "SET_ALL_POSTS_ERROR",
        payload: errorMsg
      };
}

export const clearPostsError = () => {
    return {
        type: "CLEAR_ALL_POSTS_ERROR"
      };
}

export const setPostsLoading = () => {
    return {
        type: "SET_ALL_POSTS_LOADING"
      };
}

export const endPostsLoading = () => {
    return {
        type: "END_ALL_POSTS_LOADING"
      };
}