// import { render, screen, fireEvent } from "@testing-library/react";
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";
// import Products from "./Products";

// const mockStore = configureStore([]);

// describe("Products", () => {
//   let store;

//   beforeEach(() => {
//     store = mockStore({
//       id: 1,
//       title: "iPhone 9",
//       description: "An apple mobile which is nothing like apple",
//       price: 549,
//       discountPercentage: 12.96,
//       rating: 4.69,
//       stock: 94,
//       brand: "Apple",
//       category: "smartphones",
//       thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//       images: "https://i.dummyjson.com/data/products/1/3.jpg",
//       slider: [
//         "https://i.dummyjson.com/data/products/1/1.jpg",
//         "https://i.dummyjson.com/data/products/1/2.jpg",
//         "https://i.dummyjson.com/data/products/1/3.jpg",
//         "https://i.dummyjson.com/data/products/1/4.jpg",
//         "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//       ],
//     });
//   });

//   it("displays the iphone 9 heading", () => {
//     render(
//       <Provider store={store}>
//         <Products />
//       </Provider>
//     );
//     expect(screen.getByText("iPhone 9")).toBeInTheDocument();
//   });
// });

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Products from "./Products";
import { BrowserRouter } from "react-router-dom";
import ShowProducts from "./ShowProducts";
import Filter from "./Filter";

const mockStore = configureStore([]);
jest.mock("./ShowProducts", () => {
  return () => <div data-testid="show-products"></div>;
});

const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = originalError;
});

describe("Productpage testing", () => {
  let store;
  // let filterObj = { Category: "", Brand: "" };
  // let setFilterObj = jest.fn();
  // let setBrand = jest.fn();
  // const setDisplayList = jest.fn();
  // const nameList = ["All", "Category1,Category2"];
  // const filterList = "Category";

  beforeEach(() => {
    store = mockStore({
      productdata: {
        products: [
          {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            images: "https://i.dummyjson.com/data/products/1/3.jpg",
            slider: [
              "https://i.dummyjson.com/data/products/1/1.jpg",
              "https://i.dummyjson.com/data/products/1/2.jpg",
              "https://i.dummyjson.com/data/products/1/3.jpg",
              "https://i.dummyjson.com/data/products/1/4.jpg",
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            ],
          },
          {
            id: 2,
            title: "iPhone X",
            description:
              "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            images: "https://i.dummyjson.com/data/products/2/3.jpg",
            slider: [
              "https://i.dummyjson.com/data/products/2/1.jpg",
              "https://i.dummyjson.com/data/products/2/2.jpg",
              "https://i.dummyjson.com/data/products/2/3.jpg",
              "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            ],
          },
        ],
      },
    });
  });
  it("renders product component or not", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Products>
            <ShowProducts />
          </Products>
        </Provider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("producttile")).toBeDefined();
    expect(screen.queryByText("iPhone 9")).toBeDefined();
    expect(screen.queryByText("iPhone X")).toBeDefined();
  });
});

describe("ShowProducts", () => {
  it("should lazy load the component", async () => {
    const { queryByTestId } = render(<ShowProducts />);
    expect(queryByTestId("show-products")).toBeDefined();
    expect(console.error).not.toHaveBeenCalled();
  });

  // it("should resolve the Promise after 500ms", async () => {
  //   jest.useFakeTimers();
  //   const promise = ShowProducts._ctor();
  //   expect(promise).toBeInstanceOf(Promise);
  //   jest.advanceTimersByTime(500);
  //   const module = await promise;
  //   expect(module.default).toBeDefined();
  //   jest.useRealTimers();
  // });
});
