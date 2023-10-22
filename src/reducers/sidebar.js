export const initialState = {
  isOpen: false,
};

export function sidebarReducer(state, action) {
  switch (action.type) {
    case "SET_OPEN":
      return { ...state, isOpen: action.payload };

    default:
      return state;
  }
}
