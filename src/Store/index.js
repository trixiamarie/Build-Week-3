import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { SECRET_KEY } from "../Config";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import userReducer from "../Reducer/userReducer";
import profileReducer from "../Reducer/profileReducer";
import searchReducer from "../Reducer/searchReducer";

const initialState = {
  user: {
    userData: [],
    experiences: [],
    userDataLoading: false,
    userDataErrorMsg: "",
  },
  profile: {
    profileData: [],
    experiences: [],
    profileDataLoading: false,
    profileDataErrorMsg: "",
  },
  search: {
    searchData: [],
    searchDataLoading: false,
    searchDataErrorMsg: "",
  },
};

const bigReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  search: searchReducer,
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
