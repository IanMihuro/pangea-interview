import {
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  REMOVE_FROM_CART,
  SHOW_CART,
  HIDE_CART,
} from "../actions/types";

const initialState = {
  cart: [],
  totalAmount: 0,
  showCart: false,
  totalQuantity: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_CART:
      return {
        ...state,
        showCart: true,
      };

    case HIDE_CART:
      return {
        ...state,
        showCart: false,
      };

    case ADD_TO_CART: {
      let newState = { ...state };

      const exists = newState.cart.find(
        (product) => product.id === action.payload.id
      );

      if (exists) {
        const existingProdIndex = newState.cart.indexOf(exists);
        newState.cart[existingProdIndex].quantity =
          newState.cart[existingProdIndex].quantity + 1;
        const newTotalAmountIncrementedAdded =
          newState.totalAmount + parseInt(exists.price);
        const newTotalQuantityIncrementedAdded = parseInt(
          newState.totalQuantity + 1
        );

        return {
          ...newState,
          totalQuantity: newTotalQuantityIncrementedAdded,
          totalAmount: newTotalAmountIncrementedAdded,
        };
      }

      return {
        ...newState,
        totalQuantity: newState.totalQuantity + 1,
        totalAmount: newState.totalAmount + action.payload.price,
        cart: [...newState.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case REMOVE_FROM_CART: {
      let newState = { ...state };
      const product = newState.cart.find(
        (product) => product.id === action.payload
      );
      const newTotalAmount =
        newState.totalAmount - product.quantity * product.price;
      const newTotalQuantity = newState.totalQuantity - product.quantity;
      const index = newState.cart.indexOf(action.payload);
      newState.cart.splice(index, 1);

      return {
        ...newState,
        totalAmount: newTotalAmount,
        totalQuantity: newTotalQuantity,
      };
    }

    case INCREMENT_QUANTITY: {
      let newState = { ...state };
      const productItem = newState.cart.find(
        (product) => product.id === action.payload
      );
      const productIndex = state.cart.indexOf(productItem);
      newState.cart[productIndex].quantity =
        newState.cart[productIndex].quantity + 1;
      const newTotalAmount = newState.totalAmount + parseInt(productItem.price);
      const newTotalQuantity = parseInt(newState.totalQuantity + 1);

      return {
        ...newState,
        totalAmount: newTotalAmount,
        totalQuantity: newTotalQuantity,
      };
    }
    case DECREMENT_QUANTITY: {
      let newState = { ...state };
      const productItem = newState.cart.find(
        (product) => product.id === action.payload
      );
      const productIndex = state.cart.indexOf(productItem);
      newState.cart[productIndex].quantity =
        newState.cart[productIndex].quantity - 1;
      const newTotalAmount = newState.totalAmount - parseInt(productItem.price);
      const newTotalQuantity = parseInt(newState.totalQuantity - 1);

      if (newState.cart[productIndex].quantity === 0) {
        newState.cart.splice(productIndex, 1);
        return {
          ...newState,
          totalAmount: newTotalAmount,
          totalQuantity: newTotalQuantity,
        };
      }

      return {
        ...newState,
        totalAmount: newTotalAmount,
        totalQuantity: newTotalQuantity,
      };
    }
    default:
      return state;
  }
}
