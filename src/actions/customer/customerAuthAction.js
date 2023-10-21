import { ERROR, SUCCESS } from "../../actionTypes/public/publicActionTypes";
import {
  CLEAN_CART,
  LOG_OUT_CUSTOMER,
  UPDATE_ADDRESS,
  UPDATE_CUSTOMER_PROFILE,
} from "../../actionTypes/customer/customerActionTypes";
import { errorHandler } from "../error/errorHandler";

import api from "../../config/api";
import mapApi from "../../config/googleApi";
import georeverse from "../../config/googleGecode";

export const log_out_customer = () => async (dispatch) => {
  try {
    const response = await api.get("/customer/pv/logout");
    if (response.data) {
      dispatch({
        type: LOG_OUT_CUSTOMER,
      });
    }
  } catch (err) {
    if (err.response.status === 401) {
      dispatch({
        type: LOG_OUT_CUSTOMER,
      });
    } else {
      errorHandler(err, dispatch, ERROR);
    }
  }
};

export const clean = () => async (dispatch) => {
  try {
    dispatch({
      type: LOG_OUT_CUSTOMER,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.response.data,
    });
  }
};

export const search_address = (address) => async (dispatch) => {
  try {
    const response = await mapApi.post("places:searchText", {
      textQuery: address.location,
      locationRestriction: {
        rectangle: {
          low: {
            latitude: 60.98267,
            longitude: 25.66151,
          },
          high: {
            latitude: 61,
            longitude: 25.8,
          },
        },
      },
    });
    let { places } = response.data;
    console.log(places);
    if (places) {
      return {
        error: false,
        addresses: places,
      };
    } else {
      return {
        error: true,
      };
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: ERROR,
      payload: err.message,
    });
    return {
      error: true,
    };
  }
};
export const search_address_coordinates =
  ({ lat, lng }) =>
  async (dispatch) => {
    try {
      const response = await georeverse.get("geocode/json", {
        params: {
          latlng: lat + "," + lng,
          key: "AIzaSyBuPC-JrJ8gg5818O-sTiJShGY35s2OupE",
        },
      });
      let { address_components } = response.data.results[0];
      let { results } = response.data;

      for (let i = 0; i < address_components.length; i++) {
        let { long_name } = address_components[i];
        if (long_name === "Lahti") {
          return {
            error: false,
            address: results[0],
          };
        }
      }
      dispatch({
        type: ERROR,
        payload: "Selected Adress is out of rage",
      });
      return {
        error: true,
      };
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.message,
      });
      return {
        error: true,
      };
    }
  };

export const add_newAddress = (newAddress) => async (dispatch) => {
  try {
    const response = await api.post("/customer/pv/add-address", newAddress);

    dispatch({
      type: UPDATE_ADDRESS,
      payload: response.data.address,
    });
    dispatch({
      type: SUCCESS,
      payload: response.data.msg,
    });
    return {
      error: false,
    };
  } catch (err) {
    errorHandler(err, dispatch, ERROR);
    return {
      error: true,
    };
  }
};
export const remove_address = (locationId) => async (dispatch) => {
  try {
    const response = await api.delete("/customer/pv/add-address", {
      data: { locationId },
    });

    dispatch({
      type: UPDATE_ADDRESS,
      payload: response.data.address,
    });
    dispatch({
      type: SUCCESS,
      payload: response.data.msg,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.response,
    });
  }
};
export const edit_address = (newAddress) => async (dispatch) => {
  try {
    const response = await api.put("/customer/pv/add-address", newAddress);
    dispatch({
      type: SUCCESS,
      payload: response.data.msg,
    });
    dispatch({
      type: UPDATE_ADDRESS,
      payload: response.data.address,
    });
    return {
      error: false,
    };
  } catch (err) {
    errorHandler(err, dispatch, ERROR);
    return {
      error: true,
    };
  }
};

export const update_customer_profile = (updateCustomer) => async (dispatch) => {
  try {
    const response = await api.put("/customer/pv/profile", updateCustomer);

    if (response.data.errors) {
      let error = response.data.errors;
      for (var key of Object.keys(error)) {
        dispatch({
          type: ERROR,
          payload: error[key],
        });
      }
    } else if (response.status === 200) {
      dispatch({
        type: SUCCESS,
        payload: response.data.msg,
      });
      dispatch({
        type: UPDATE_CUSTOMER_PROFILE,
        payload: response.data.customer,
      });
    }
  } catch (err) {
    errorHandler(err, dispatch, ERROR);
  }
};

export const check_out = (checkOut) => async (dispatch) => {
  try {
    const response = await api.post("/customer/pv/check-out", checkOut);

    dispatch({
      type: SUCCESS,
      payload: response.data,
    });
    dispatch({
      type: CLEAN_CART,
      payload: response.data,
    });
  } catch (err) {
    errorHandler(err, dispatch, ERROR);
  }
};
