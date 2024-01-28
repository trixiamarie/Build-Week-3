const jobsSavedReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_JOB":
      return [...state, action.payload];
    case "REMOVE_JOB":
        console.log(action.payload)
      return [...state,
         state.jobsSaved.filter(
          x => x !== action.payload
        )]
    default:
      return state;
  }
};

export default jobsSavedReducer;
