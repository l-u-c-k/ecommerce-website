// import React from "react";
// import { render, waitFor } from "@testing-library/react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   loadProductsStart,
//   loadOrdersStart,
// } from "../../../redux/actions/actions";
// import Products from "./Products";
// import { BrowserRouter } from "react-router-dom";
// import { act } from "@testing-library/react";

// jest.mock("react-redux", () => ({
//   useDispatch: jest.fn(),
//   useSelector: jest.fn(),
// }));
// // useDispatch.mockReturnValue(dispatchMock) is a Jest mock function that is used to mock the useDispatch hook provided by the React-Redux library. This mock function is used to simulate the behavior of the useDispatch hook in a test environment.

// // When a component is tested that uses the useDispatch hook, the mockReturnValue method can be used to set the return value of the useDispatch hook to the provided dispatchMock. This is done so that the component can use the provided dispatchMock instead of the actual dispatch function from the store.

// // useSelector.mockImplementation((callback) => callback(selectorMock)) is also a Jest mock function that is used to mock the useSelector hook provided by the React-Redux library. This mock function is used to simulate the behavior of the useSelector hook in a test environment.

// // When a component is tested that uses the useSelector hook, the mockImplementation method can be used to set the implementation of the useSelector hook to the provided callback function. This is done so that the component can use the provided selectorMock instead of the actual selector function from the store.

// // Overall, these mock functions are used to create a controlled testing environment for Redux-connected React components by providing mock dispatch and selector functions that can be easily manipulated in a test environment.

// describe("Products component", () => {
//   let dispatchMock;
//   let selectorMock;

//   beforeEach(() => {
//     dispatchMock = jest.fn();
//     selectorMock = jest.fn();

//     useDispatch.mockReturnValue(dispatchMock);
//     useSelector.mockImplementation((callback) => callback(selectorMock));
//   });

//   it("should dispatch loadProductsStart and loadOrdersStart on mount", async () => {
//     render(
//       <BrowserRouter>
//         <Products />
//       </BrowserRouter>
//     );

//     expect(dispatchMock).toHaveBeenCalledTimes(2);
//     expect(dispatchMock).toHaveBeenCalledWith(loadProductsStart());
//     expect(dispatchMock).toHaveBeenCalledWith(loadOrdersStart());
//   });
// });

// import React from "react";
// import { shallow, swallow } from "enzyme";
// import { Provider } from "react-redux";
// import configureMockStore from "redux-mock-store";
// import { act } from "react-dom/test-utils";
// import Products from "./Products";
// import {
//   LOAD_PRODUCTS_START,
//   LOAD_ORDERS_START,
// } from "../../../redux/actions/actionTypes";
// import {
//   loadOrdersStart,
//   loadProductsStart,
// } from "../../../redux/actions/actions";
// import createSagaMiddleware from "redux-saga";

// const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware];
// const mockStore = configureMockStore(middleware);
// // const store = mockStore({});

// const mockServiceCreator =
//   (body, succeeds = true) =>
//   () =>
//     new Promise((resolve, reject) => {
//       setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
//     });
// describe("Product component testing", () => {
//   let store;
//   beforeEach(() => {
//     store = mockStore({ products: [] });
//   });
//   afterEach(() => {
//     store.clearActions();
//   });
//   it("dispatches the expected action", async () => {
//     const wrapper = shallow(
//       <Provider store={store}>
//         <Products />
//       </Provider>
//     );
//     await act(async () => {
//       wrapper.update();
//     });
//     const dispatchedActions = store.getActions();
//     //expect(dispatchedActions).toBeCalled(loadProductsStart);
//     expect(dispatchedActions).toContainEqual({ type: LOAD_PRODUCTS_START });
//     // expect(dispatchedActions).toHaveBeenCalledWith(loadProductsStart);
//     // expect(dispatchedActions).toHaveBeenCalledWith(loadOrdersStart);

//     wrapper.unmount();
//   });
// });

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { loadProductsStart } from "../../../redux/actions/actions";
import Products from "./Products";
import "@testing-library/jest-dom";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const mockStore = configureMockStore(middleware);

describe("Products component", () => {
  it("should dispatch the loadproducts start and load orders start action ", () => {
    const store = mockStore({
      productdata: {
        products: [],
        loading: false,
        cart: [],
      },
    });

    const { rerender } = render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    store.dispatch = jest.fn();

    rerender(
      <Provider store={store}>
        <Products />
      </Provider>
    );
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "LOAD_PRODUCTS_START",
    });
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "LOAD_ORDERS_START",
    });
  });
});
