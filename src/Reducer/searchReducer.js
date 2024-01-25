const searchReducer = (
    state = {
      search: {
        searchData: [],
        searchDataLoading: false,
        searchDataErrorMsg: "",
      },
    },
    action
  ) => {
    switch (action.type) {
      case "GET_SEARCH_DATA":
        return {
          ...state,
          searchData: action.payload,
        };
  
        break;
  
      default:
        return state;
    }
  };
  
  export default searchReducer;