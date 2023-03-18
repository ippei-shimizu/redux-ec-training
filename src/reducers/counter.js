const counterReducer = (state = 0, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      return state + actions.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
