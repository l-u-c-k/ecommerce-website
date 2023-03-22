import * as types from "../actions/actionTypes";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  orders: [],
  error: null,
  loading: false,
  cart: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  wishlist: [],
};

const productReducer = (state = initialState, action) => {
  const response = action.response;
  switch (action.type) {
    case types.LOAD_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case types.LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.ADD_CART_START: {
      // let existingproduct = false;
      // let product_list = state.cart.map((product) => {
      //   if (product.id == action.payload.id) {
      //     product.quantity += 1;
      //     existingproduct = true;
      //   }
      // });
      //console.log("exist:",existingproduct);

      // if (existingproduct) {
      //   return {
      //     ...state,
      //     cart: product_list,
      //   };
      // } else {
      //   return {
      //     ...state,
      //     cart: [...state.cart, { product: action.payload, quantity: 1 }],
      //   };
      // }
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.stock >= itemInCart.quantity + 1
          ? itemInCart.quantity++
          : toast.error(`Only ${itemInCart.stock} are available`, {
              autoClose: 1000,
            });
      } else {
        action.payload.stock > 0
          ? state.cart.push({ ...action.payload, quantity: 1 })
          : toast.error("Out of Stock", { autoClose: 7000 });
      }

      break;
    }

    case types.DELETE_CART_START:
      {
        const removeItem = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeItem;
      }
      break;

    case types.DECREMENT_CART_QUANTITY_START:
      {
        const itemIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        if (state.cart[itemIndex].quantity > 1) {
          state.cart[itemIndex].quantity -= 1;
        } else if (state.cart[itemIndex].quantity === 1) {
          const decrementItem = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
          state.cart = decrementItem;
        }
      }
      break;

    case types.CLEAR_CART_START:
      {
        state.cart = [];
      }
      break;

    case types.GET_TOTALS_START: {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cart) => {
          const { price, quantity } = cart;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }

    case types.CREATE_ORDER_START:
      return {
        ...state,
        orders: action.payload,
      };

    case types.LOAD_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_ORDERS_SUCCESS: {
      console.log("orders data:", action.payload);

      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    }

    case types.ADD_TO_WISHLIST_START:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case types.REMOVE_FROM_WISHLIST_START:
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case types.OCCURED_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
