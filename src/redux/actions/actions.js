import * as types from "./actionTypes";

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};
export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});
export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});

export const loadProductsStart = () => ({
  type: types.LOAD_PRODUCTS_START,
});

export const loadProductsSuccess = (products) => ({
  type: types.LOAD_PRODUCTS_SUCCESS,
  payload: products,
});
export const loadProductsError = (error) => ({
  type: types.LOAD_PRODUCTS_ERROR,
  payload: error,
});

export const loadOrdersStart = () => ({
  type: types.LOAD_ORDERS_START,
});

export const loadOrdersSuccess = (orders) => ({
  type: types.LOAD_ORDERS_SUCCESS,
  payload: orders,
});

export const addToCart = (product) => ({
  type: types.ADD_CART,
  payload: product,
});

export const addToCartStart = (product) => ({
  type: types.ADD_CART_START,
  payload: product,
});

export const deleteFromCart = (product) => ({
  type: types.DELETE_CART,
  payload: product,
});

export const deleteFromCartStart = (product) => ({
  type: types.DELETE_CART_START,
  payload: product,
});

export const decrementCartQuantity = (product) => ({
  type: types.DECREMENT_CART_QUANTITY,
  payload: product,
});

export const decrementCartQuantityStart = (product) => ({
  type: types.DECREMENT_CART_QUANTITY_START,
  payload: product,
});

export const clearCart = () => ({
  type: types.CLEAR_CART,
});

export const clearCartStart = () => ({
  type: types.CLEAR_CART_START,
});

export const getTotals = () => ({
  type: types.GET_TOTALS,
});

export const getTotalStart = () => ({
  type: types.GET_TOTALS_START,
});

export const occuredError = () => ({
  type: types.OCCURED_ERROR,
});

export const createOrder = (order) => ({
  type: types.CREATE_ORDER,
  payload: order,
});

export const createOrderStart = (order) => ({
  type: types.CREATE_ORDER_START,
  payload: order,
});

export const addToWishlist = (product) => ({
  type: types.ADD_TO_WISHLIST,
  payload: product,
});

export const addToWishlistStart = (product) => ({
  type: types.ADD_TO_WISHLIST_START,
  payload: product,
});
export const removeFromWishList = (productId) => ({
  type: types.REMOVE_FROM_WISHLIST,
  payload: productId,
});
export const removeFromWishListStart = (productId) => ({
  type: types.REMOVE_FROM_WISHLIST_START,
  payload: productId,
});
