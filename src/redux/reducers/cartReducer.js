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

    case ADD_TO_CART:
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

    case REMOVE_FROM_CART:
      let copiedState = { ...state };
      const product = copiedState.cart.filter(
        (product) => product.id === action.payload
      );
      const newTotalAmount =
        copiedState.totalAmount - product[0].quantity * product[0].price;
      const newTotalQuantity = copiedState.totalQuantity - product[0].quantity;
      const index = copiedState.cart.indexOf(action.payload);
      copiedState.cart.splice(index, 1);

      return {
        ...copiedState,
        totalAmount: newTotalAmount,
        totalQuantity: newTotalQuantity,
      };

    case INCREMENT_QUANTITY:
      let incrementedState = { ...state };
      const productItem = incrementedState.cart.filter(
        (product) => product.id === action.payload
      )[0];
      const productIndex = state.cart.indexOf(productItem);
      incrementedState.cart[productIndex].quantity =
        incrementedState.cart[productIndex].quantity + 1;
      const newTotalAmountIncremented =
        incrementedState.totalAmount + parseInt(productItem.price);
      const newTotalQuantityIncremented = parseInt(
        incrementedState.totalQuantity + 1
      );

      return {
        ...incrementedState,
        totalAmount: newTotalAmountIncremented,
        totalQuantity: newTotalQuantityIncremented,
      };
    case DECREMENT_QUANTITY:
      let decrementState = { ...state };
      const productItemA = decrementState.cart.filter(
        (product) => product.id === action.payload
      )[0];
      const productIndexA = state.cart.indexOf(productItemA);
      decrementState.cart[productIndexA].quantity =
        decrementState.cart[productIndexA].quantity - 1;
      const newTotalAmountIncrementedA =
        decrementState.totalAmount - parseInt(productItemA.price);
      const newTotalQuantityIncrementedA = parseInt(
        decrementState.totalQuantity - 1
      );

      if (decrementState.cart[productIndexA].quantity === 0) {
        decrementState.cart.splice(productIndexA, 1);
        return {
          ...decrementState,
          totalAmount: newTotalAmountIncrementedA,
          totalQuantity: newTotalQuantityIncrementedA,
        };
      }

      return {
        ...decrementState,
        totalAmount: newTotalAmountIncrementedA,
        totalQuantity: newTotalQuantityIncrementedA,
      };

    default:
      return state;
  }
}
