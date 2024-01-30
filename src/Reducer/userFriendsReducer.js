const userFriendsReducer = (
    state = [],
    action
  ) => {
    switch (action.type) {
      case "ADD_USER":
        return [...state, action.payload];

    case "REMOVE_USER":
      console.log(action.payload)
      return   state.filter(
          x => x._id !== action.payload._id
        )
  
      default:
        return state;
    }
  };
  
  export default userFriendsReducer;