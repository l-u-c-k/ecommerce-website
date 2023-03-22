import { fork } from "redux-saga/effects";
import {
  watchUserAuthentication,
  onLoadUsers,
  onLoadProducts,
  onAddCart,
  onDeleteCart,
  onDecrementCart,
  onClearCart,
  onGetTotal,
  onCreateOrder,
  onLoadOrders,
  onAddWishlist,
  onDeleteWishlist,
} from "./watchers";

export default function* rootSaga() {
  yield fork(watchUserAuthentication);
  yield fork(onLoadUsers);
  yield fork(onLoadProducts);
  yield fork(onAddCart);
  yield fork(onDeleteCart);
  yield fork(onDecrementCart);
  yield fork(onClearCart);
  yield fork(onGetTotal);
  yield fork(onCreateOrder);
  yield fork(onLoadOrders);
  yield fork(onAddWishlist);
  yield fork(onDeleteWishlist);
}
