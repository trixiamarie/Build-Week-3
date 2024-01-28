export const userFriendsAction = (user) => {
    return {
        type: "ADD_USER",
        payload: user
      };
}

export const removeuserFriendsAction = (user) => {
    return {
        type: "REMOVE_USER",
        payload: user
      };
}