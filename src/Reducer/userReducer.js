const userReducer = (
  state =  {
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
  action
) => {
  switch (action.type) {
    case "GET_USER_DATA":
      return {
        ...state,
        userData:{
          ...state.userData,
          data : action.payload,
        }
       
      };

    case "SET_USER_ERROR":
      return {
        ...state,
        userData:{
          ...state.userData,
          dataErrorMsg: action.payload,
          dataLoading: false
        }
      };

    case "CLEAR_USER_ERROR":
      return {
        ...state,
        userData:{
          ...state.userData,
          dataErrorMsg: "",
        }
      };

    case "SET_USER_LOADING":
      return {
        ...state,
        userData:{
          ...state.userData,
          dataLoading: true
        }
      };

    case "END_USER_LOADING":
      return {
        ...state,
        userData:{
          ...state.userData,
          dataLoading: false
        }
      };

    default:
      return state;
  }
};

export default userReducer;
