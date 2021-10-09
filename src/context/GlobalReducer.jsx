import {
  ADD_TO_CART,
  DECREASE_AMOUNT,
  INCREASE_AMOUNT,
  REMOVE_FROM_CART,
} from "../constants";

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let product = action.payload;
      let inCart = state.cart.find((p) => p.id === product.id);

      console.log({ inCart });
      console.log(state.cart);

      let cart = [...state.cart].map((p) => {
        if (p.id === product.id) {
          p.amount++;
        }

        return p;
      });

      if (!inCart) {
        product.amount++;
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      return {
        ...state,
        cart,
      };
    }

    case INCREASE_AMOUNT: {
      let cart = [...state.cart].map((item) => {
        if (item.id === action.payload) {
          item.amount++;
        }

        return item;
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...state,
        cart,
      };
    }
    case DECREASE_AMOUNT: {
      let cart = [...state.cart].map((item) => {
        if (item.id === action.payload) {
          item.amount > 1 && item.amount--;
        }

        return item;
      });

      localStorage.setItem("cart", JSON.stringify(cart));

      return {
        ...state,
        cart,
      };
    }

    case REMOVE_FROM_CART: {
      let cart = [...state.cart].filter((item) => item.id !== action.payload);

      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...state,
        cart,
      };
    }

    default:
      return state;
  }
};
