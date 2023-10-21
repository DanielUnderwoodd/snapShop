import {
  ERROR_CLEANER,
  SUCCESS_CLEANER,
  ERROR,
  GET_PRODUCT,
  CHANGE_CART,
} from "../../actionTypes/public/publicActionTypes";
import { errorHandler } from "../error/errorHandler";

import Api from "../../config/api";

export const error_cleaner = () => {
  return {
    type: ERROR_CLEANER,
  };
};
export const success_cleaner = () => {
  return {
    type: SUCCESS_CLEANER,
  };
};

export const get_product = () => async (dispatch) => {
  try {
    const response = await Api.get("/data/products");
    var finalProducts = [];
    for (let i = 0; i < response.data.length; i++) {
      let data = {
        categoryName: response.data[i]._id,
        products: response.data[i].products,
      };
      finalProducts.push(data);
    }

    dispatch({
      type: GET_PRODUCT,
      payload: finalProducts,
    });
  } catch (err) {
    errorHandler(err, dispatch, ERROR);
  }
};

export const change_cart =
  ({ id, img, price, text, type, cart }) =>
  (dispatch) => {
    try {
      cart = cart.filter(
        (product) => product !== null && product !== undefined
      );
      var updatedCart = [];
      var updatedProduct;
      let selectedProductIndex = cart.findIndex((product) => product.id === id);
      let data = {
        id,
        img,
        price,
        text,
      };

      if (selectedProductIndex !== -1) {
        switch (type) {
          case "delete":
            let filteredCart = cart.filter((product) => product.id !== id);
            updatedCart = [...filteredCart];

            break;
          case "add":
            if (cart[selectedProductIndex].quantity < 5) {
              let { quantity } = cart[selectedProductIndex];
              updatedProduct = {
                ...cart[selectedProductIndex],
                quantity: quantity + 1,
              };
              updatedCart = [
                ...cart.slice(0, selectedProductIndex), // Previous products before the updated one
                updatedProduct,
                ...cart.slice(selectedProductIndex + 1), // Products after the updated one
              ];
              break;
            } else {
              throw new Error("can not add more than 5"); // Throwing a custom error
            }

          case "remove":
            let { quantity } = cart[selectedProductIndex];
            updatedProduct = {
              ...cart[selectedProductIndex],
              quantity: quantity - 1,
            };
            updatedCart = [
              ...cart.slice(0, selectedProductIndex), // Previous products before the updated one
              updatedProduct,
              ...cart.slice(selectedProductIndex + 1), // Products after the updated one
            ];
        }
        if (updatedCart.length === 0) {
        }
      } else {
        updatedProduct = {
          ...data,
          quantity: 1,
        };
        updatedCart = [...cart, updatedProduct];
      }

      dispatch({
        type: CHANGE_CART,
        payload: updatedCart,
      });
    } catch (err) {
      errorHandler(err, dispatch, ERROR);
    }
  };

export const search_product =
  (ContextDispatch, incomingData) => async (ReduxDispacth) => {
    try {
      const response = await Api.get("/data/products/search", {
        params: {
          incomingData,
        },
      });

      if (response && response.data) {
        ContextDispatch({
          type: "SET_PRODUCT_LIST",
          payload: response.data.findResponse,
        });
      }
    } catch (err) {
      errorHandler(err, ReduxDispacth, ERROR);
    }
  };
