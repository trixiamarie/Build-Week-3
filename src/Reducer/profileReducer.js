const profileReducer = (
    state = {
      profile: {
        profileData: [],
        experiences: [],
        profileDataLoading: false,
        profileDataErrorMsg: "",
      },
    },
    action
  ) => {
    switch (action.type) {
      case "GET_PROFILE_DATA":
        return {
          ...state,
          profileData: action.payload,
        };
  
      case "SET_PROFILE_ERROR":
        return {
          ...state,
          profileDataErrorMsg: action.payload,
          profileDataLoading: false
        };
  
      case "CLEAR_PROFILE_ERROR":
        return {
          ...state,
          profileDataErrorMsg: "",
        };
  
      case "SET_PROFILE_LOADING":
        return {
          ...state,
          profileDataLoading: true,
        };
  
      case "END_PROFILE_LOADING":
        return {
          ...state,
          profileDataLoading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default profileReducer;
  