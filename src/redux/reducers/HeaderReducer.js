let initialState = {
      title: "",
      section: ""
};
export const titleAction = (title) => {
      return { type: "SET-TITLE", title }
};
export const section = (section) => {
      return { type: "SET-SECTION", section }
};
export const headerReducer = (state = initialState, action) => {
      switch (action.type) {
            case "SET-TITLE":
                  return { ...state, title: action.title };
            case "SET-SECTION":
                  return { ...state, section: action.section };
            default:
                  return state
      }
};