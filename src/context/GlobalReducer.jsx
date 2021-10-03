import { ADD_TO_CART } from "../constants";

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let product = action.payload;
      let inCart = state.cart.find((p) => p.id === product.id);

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

      return {
        ...state,
        cart,
      };
    default:
      return state;
  }
};
