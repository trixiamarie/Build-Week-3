import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { SECRET_KEY } from "../Config";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import userReducer from "../Reducer/userReducer";
import profileReducer from "../Reducer/profileReducer";
import searchReducer from "../Reducer/searchReducer";
import postsReducer from "../Reducer/postsReducer";

const initialState = {
  user: {
    userData: {
      data: [],
      dataLoading: false,
      dataErrorMsg: "",
    },
    userExperiences: {
      data: [],
      dataLoading: false,
      dataErrorMsg: "",
    },
    userPosts: {
      data: [],
      dataLoading: false,
      dataErrorMsg: "",
    },
  },
  profile: {
    profileData:{
      data: [],
      dataLoading: false,
      dataErrorMsg: "",
    },
    profileExperiences:{
      data: [],
      dataLoading: false,
      dataErrorMsg: "",
    },
    profilePosts: {
      data: [],
      dataLoading: false,
      dataErrorMsg: "",
    },
  },
  search: {
    searchData: [],
    searchDataLoading: false,
    searchDataErrorMsg: "",
    query:"",
  },
  posts:{
    data: [],           //L'array dei post della Home. Son circa 450
    dataLoading: false,
    dataErrorMsg: "",
  },  
};

const bigReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  search: searchReducer,
  posts: postsReducer
});

const persistentConfig = {
  key: "root",
  storage,
  transform: [
    encryptTransform({
      secretKey: SECRET_KEY,
      onError: function (error) {
        console.error(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistentConfig, bigReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);