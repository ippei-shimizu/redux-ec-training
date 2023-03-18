const isLoginReducer = (state = true, actions) => {
  switch (actions.type) {
    case "LOGIN":
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;
