const jobsSavedReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_JOB":
      if(state.includes(action.payload)){
        return state
      }
      return [...state, action.payload];
    case "REMOVE_JOB":
        console.log(action.payload)
      return   state.filter(
          x => x !== action.payload
        )
       
    default:
      return state;
  }
};

export default jobsSavedReducer;
