import { AddToCart, ClearCart, RemoveFromCart } from "./cartTypes";

const initialState = {
  cart: [],
  total: 0,
  totalPrice: 0,
};
export const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case AddToCart: {
      let productTotal = { ...state };
      productTotal.total++;

      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedCartIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updateQuantity = { ...updatedCart[updatedCartIndex] };
        updateQuantity.quantity++;
        updatedCart[updatedCartIndex] = updateQuantity;
      }
      return {
        ...state,
        cart: updatedCart,
        totalPrice: state.totalPrice + action.payload.price,
        total: productTotal.total,
      };
    }
    case RemoveFromCart: {
      let productTotal = { ...state };

      productTotal.total--;
      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updateQuantity = { ...updatedCart[updatedCartIndex] };
      if (updateQuantity.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
          total: productTotal.total,
          totalPrice: state.totalPrice - action.payload.price,
        };
      } else {
        updateQuantity.quantity--;
        updatedCart[updatedCartIndex] = updateQuantity;
        return {
          ...state,
          cart: updatedCart,
          total: productTotal.total,
          totalPrice: state.totalPrice - action.payload.price,
        };
      }
    }
      case ClearCart:{
        return{
          cart: [],
          total: 0,
          totalPrice: 0,
        }
      }

    default:
      return state;
  }
};
