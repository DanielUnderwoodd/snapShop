export const initialState = {
  input: "",
  expand: false,
  productList: [],
  error: [],
  isLoading: false,
  currentProduct: "",
};

export function searchReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_PRODUCT":
      return { ...state, productWeather: action.payload };
    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "SET_EXPAND":
      return { ...state, expand: action.payload };
    case "SET_PRODUCT_LIST":
      return { ...state, productList: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_INPUT_LOADING":
      return { ...state, ...action.payload };
    case "SET_EXPAND_LOADING":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
