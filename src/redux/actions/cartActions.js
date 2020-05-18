import {
  SHOW_CART,
  HIDE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CURRENCY_CHANGE,
} from "./types.js";

export function showCart() {
  return function (dispatch) {
    dispatch({
      type: SHOW_CART,
    });
  };
}

export function hideCart() {
  return function (dispatch) {
    dispatch({
      type: HIDE_CART,
    });
  };
}

export function addToCart(product) {
  return function (dispatch) {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
}

export function removeFromCart(id) {
  return function (dispatch) {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  };
}

export function incrementQuantity(id) {
  return function (dispatch) {
    dispatch({
      type: INCREMENT_QUANTITY,
      payload: id,
    });
  };
}

export function decrementQuantity(id) {
  return function (dispatch) {
    dispatch({
      type: DECREMENT_QUANTITY,
      payload: id,
    });
  };
}

export function currencyChange(products) {
  return function (dispatch) {
    dispatch({
      type: CURRENCY_CHANGE,
      payload: products,
    });
  };
}
