const searchReducer = (
  state = {
    data: [],
    dataLoading: false,
    errorMsg: "",
    query: "",
    filtro: "",
  },
  action
) => {
  switch (action.type) {
    case "GET_SEARCH_DATA":
      return {
        ...state,
        data: action.payload,
      };

    case "SET_SEARCH_ERROR":
      return {
        ...state,
        errorMsg: action.payload,
        dataLoading: false,
      };

    case "CLEAR_SEARCH_ERROR":
      return {
        ...state,
        errorMsg: "",
      };

    case "SET_SEARCH_LOADING":
      return {
        ...state,
        dataLoading: true,
      };

    case "END_SEARCH_LOADING":
      return {
        ...state,
        dataLoading: false,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "SET_SEARCH_FILTRO":
      return {
        ...state,
        filtro: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
