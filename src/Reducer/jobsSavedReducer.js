const jobsSavedReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_JOB":
      if( state.find(
        x => x._id == action.payload._id
      )){
        return state
      }
      return [...state, action.payload];
    case "REMOVE_JOB":
        console.log(action.payload)
      return   state.filter(
          x => x._id !== action.payload._id
        )
       
    default:
      return state;
  }
};

export default jobsSavedReducer;
