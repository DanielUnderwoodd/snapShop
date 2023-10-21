import { FRONT_ERROR } from "../../actionTypes/public/publicActionTypes";

export const errorHandler = (err, dispatch, action) => {
  if (err.response && err.response.data.errors) {
    let { errors } = err.response.data;
    let newErrors = Object.values(errors);
    newErrors.forEach((element) => {
      dispatch({
        type: action,
        payload: element,
      });
    });
  } else if (err.response) {
    let { data } = err.response;
    dispatch({
      type: action,
      payload: data,
    });
  } else {
    dispatch({
      type: action,
      payload: err.message,
    });
  }
};

export const front_error_handler = (err) => {
  return {
    type: FRONT_ERROR,
    payload: err.message,
  };
};
