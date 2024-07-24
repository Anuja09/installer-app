const initialState = {
  user: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
   
    case "LOGIN_SUCCESS":

    console.log(action,'action');
      return {
        ...state,
        user: action.payload,
      };
      default:
      return initialState
  }
};
