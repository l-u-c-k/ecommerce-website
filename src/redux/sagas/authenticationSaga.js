import { put, call } from "redux-saga/effects";
import {
  loginUserApi,
  loadUsersApi,
  loadProductsApi,
  loadSingleProductApi,
  createOrderApi,
  loadOrdersApi,
  
} from "../api/apis";
import * as types from "../actions/actionTypes";
import {
  loadUsersSuccess,
  loadUsersError,
  loadProductsSuccess,
  loadProductsError,
  occuredError,
  createOrderStart,
  loadOrdersSuccess,
} from "../actions/actions";

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserApi, payload);
    yield [put({ type: types.LOGIN_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}

export function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    console.log("response", response.data);
    if (response.status === 200) {
      yield put(loadUsersSuccess(response.data));
      // console.log(response.data)
    }
  } catch (error) {
    yield put(loadUsersError(error.response.data));
  }
}

export function* onLoadProductsStartAsync() {
  try {
    const response = yield call(loadProductsApi);

    // console.log("response",response.data);
    if (response.status === 200) {
      yield put(loadProductsSuccess(response.data));
      // console.log(response.data)
    }
  } catch (error) {
    yield put(loadProductsError(error.response.data));
  }
}

export function* onAddCartStartAsync({ payload }) {
  try {
    yield put({ type: types.ADD_CART_START, payload });
  } catch (error) {
    yield put(occuredError(error.response));
  }
}

export function* onDeleteCartStartAsync({ payload }) {
  try {
    yield put({ type: types.DELETE_CART_START, payload });
  } catch (error) {
    yield put(occuredError(error.response));
  }
}

export function* onDecrementCartStartAsync({ payload }) {
  try {
    yield put({ type: types.DECREMENT_CART_QUANTITY_START, payload });
  } catch (error) {
    yield put(occuredError(error.response));
  }
}

export function* onClearCartStartAsync() {
  try {
    yield put({ type: types.CLEAR_CART_START });
  } catch (error) {
    yield put(occuredError(error.response));
  }
}

export function* onGetTotalStartAsync() {
  try {
    yield put({ type: types.GET_TOTALS_START });
  } catch (error) {
    yield put(occuredError(error.response));
  }
}

export function* onCreateOrderStartAsync({ payload }) {
  try {
    console.log("in sagas");
    const response = yield call(createOrderApi, payload);

    console.log("order response", response.data);
    if (response.status === 200) {
      // yield [put({ createOrderStart, response })];
      yield put(createOrderStart(response.data));
      // console.log(response.data)
    }
  } catch (error) {
    yield put(occuredError(error.response));
  }
}

export function* onLoadOrdersStartAsync() {
  try {
    const response = yield call(loadOrdersApi);

    // console.log("response",response.data);

    if (response.status === 200) {
      console.log("load order response", response.data);
      yield put(loadOrdersSuccess(response.data));
    }
  } catch (error) {
    yield put(occuredError(error.response));
  }
}



export function* onAddWishlistStartAsync({ payload }) {
  try {
    yield put({ type: types.ADD_TO_WISHLIST_START, payload });
  } catch (error) {
    yield put(occuredError(error.response));
  }
}

export function* onDeleteWishlistStartAsync({ payload }) {
  try {
    yield put({ type: types.REMOVE_FROM_WISHLIST_START, payload });
  } catch (error) {
    yield put(occuredError(error.response));
  }
}
