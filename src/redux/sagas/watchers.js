import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  loginSaga,
  onLoadUsersStartAsync,
  onLoadProductsStartAsync,
  onAddCartStartAsync,
  onDeleteCartStartAsync,
  onDecrementCartStartAsync,
  onClearCartStartAsync,
  onGetTotalStartAsync,
  onCreateOrderStartAsync,
  onLoadOrdersStartAsync,
  onAddWishlistStartAsync,
  onDeleteWishlistStartAsync,
} from "./authenticationSaga";
import * as types from "../actions/actionTypes";

export function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}

export function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

export function* onLoadProducts() {
  yield takeEvery(types.LOAD_PRODUCTS_START, onLoadProductsStartAsync);
}

export function* onAddCart() {
  yield takeLatest(types.ADD_CART, onAddCartStartAsync);
}

export function* onDeleteCart() {
  yield takeLatest(types.DELETE_CART, onDeleteCartStartAsync);
}

export function* onDecrementCart() {
  yield takeLatest(types.DECREMENT_CART_QUANTITY, onDecrementCartStartAsync);
}

export function* onClearCart() {
  yield takeLatest(types.CLEAR_CART, onClearCartStartAsync);
}

export function* onGetTotal() {
  yield takeLatest(types.GET_TOTALS, onGetTotalStartAsync);
}

export function* onCreateOrder() {
  yield takeLatest(types.CREATE_ORDER, onCreateOrderStartAsync);
}

export function* onLoadOrders() {
  yield takeLatest(types.LOAD_ORDERS_START, onLoadOrdersStartAsync);
}

export function* onAddWishlist() {
  yield takeLatest(types.ADD_TO_WISHLIST, onAddWishlistStartAsync);
}

export function* onDeleteWishlist() {
  yield takeLatest(types.REMOVE_FROM_WISHLIST, onDeleteWishlistStartAsync);
}
