const profileReducer = (
  state =  {
    profileData: {
      data: [],
      dataLoading: false,
      dataErrorMsg: "",
    },
    profileExperiences: {
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
  action
) => {
  switch (action.type) {
    case "GET_PROFILE_DATA":
      return {
        ...state,
        profileData:{
          ...state.profileData,
          data : action.payload,
        }       
      };

    case "SET_PROFILE_ERROR":
      return {
        ...state,
        profileData:{
          ...state.profileData,
          dataErrorMsg: action.payload,
          dataLoading: false
        }
      };

    case "CLEAR_PROFILE_ERROR":
      return {
        ...state,
        profileData:{
          ...state.profileData,
          dataErrorMsg: "",
        }
      };

    case "SET_PROFILE_LOADING":
      return {
        ...state,
        profileData:{
          ...state.profileData,
          dataLoading: true
        }
      };

    case "END_PROFILE_LOADING":
      return {
        ...state,
        profileData:{
          ...state.profileData,
          dataLoading: false
        }
      };

    default:
      return state;
  }
};

export default profileReducer;
