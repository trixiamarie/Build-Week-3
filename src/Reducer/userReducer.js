const userReducer = (
  state = {
    user: {
      userData: [],
      experiences: [],
      userDataLoading: false,
      userDataErrorMsg: "",
    },
  },
  action
) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };

    case "SET_USER_ERROR":
      return {
        ...state,
        userDataErrorMsg: action.payload,
        userDataLoading: false
      };

    case "CLEAR_USER_ERROR":
      return {
        ...state,
        userDataErrorMsg: "",
      };

    case "SET_USER_LOADING":
      return {
        ...state,
        userDataLoading: true,
      };

    case "END_USER_LOADING":
      return {
        ...state,
        userDataLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
