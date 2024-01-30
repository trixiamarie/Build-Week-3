const allProfilesReducer = (
    state = {
      data: [],
      dataLoading: false,
      errorMsg: "",
    },
    action
  ) => {
    switch (action.type) {
      case "GET_ALL_PROFILES":
        return {
          ...state,
          data: action.payload,
        };
  
      case "SET_ALL_PROFILES_ERROR":
        return {
          ...state,
          errorMsg: action.payload,
          dataLoading: false
        };
  
      case "CLEAR_ALL_PROFILES_ERROR":
        return {
          ...state,
          errorMsg: "",
        };
  
      case "SET_ALL_PROFILES_LOADING":
        return {
          ...state,
          dataLoading: true,
        };
  
      case "END_ALL_PROFILES_LOADING":
        return {
          ...state,
          dataLoading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default allProfilesReducer;
  