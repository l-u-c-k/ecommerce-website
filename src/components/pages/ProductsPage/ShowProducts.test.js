import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShowProducts from "./ShowProducts";
import { useSelector } from "react-redux";
import store from "../../../redux/store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

jest.mock(axios);
describe("Show Products component testing", () => {
  const { products } = useSelector((state) => state.productdata);
  //   console.log("Product data inside testing:", products);
  test("renders showproducts component without any error", () => {
     axios.get.mockImplementation(products);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ShowProducts products={products} />
        </Provider>
      </BrowserRouter>
    );
  });
});
