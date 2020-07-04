const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_VISIBILITY":
      const newState = { ...state };
      newState[action.section] = action.visibility;
      return newState;
    default:
      return state;
  }
};

export const setVisibilityCreator = (section, visibility) => {
  return {
    type: "SET_VISIBILITY",
    section,
    visibility,
  };
};

export default reducer;
