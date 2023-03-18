const isLoggingReducer = (state = false, actions) => {
  switch (actions.type) {
    case "LOGIN":
      return !state;
    default:
      return state;
  }
};

export default isLoggingReducer;
