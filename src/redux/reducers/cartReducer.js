import * as types from "../actions/actionTypes";

const initialState = {
  cart: [],
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CART_START:
      //i need to check if the product already exists or not if already exists i need to add 1 to the quantity and not the product
      console.log(action.payload);

      const product = action.payload;
      const existingProduct = state.cart.find((x) => x.id === product.id);
      if (existingProduct) {
        return state.cart.map((x) =>
          x.id === product.id ? { ...x, stock: x.stock + 1 } : x
        );
      } else {
        return {
          ...state.cart,
          cart: {
            ...product,
            stock: 1,
          },
        };
      }

    // case types.DELETE_CART:
    //   const existingProduct1 = state.cart.find(
    //     (x) => x.id === action.payload.id
    //   );
    //   if (existingProduct1.stock === 1) {
    //     return state.cart.filter((x) => x.id !== existingProduct1.id);
    //   } else {
    //     return state.cart.map((x) =>
    //       x.id === action.payload.id ? { ...x, stock: x.stock - 1 } : x
    //     );
    //   }
    //   break;
    case types.OCCURED_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default cartReducer;
