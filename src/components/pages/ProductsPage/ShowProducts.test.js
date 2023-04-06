import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShowProducts from "./ShowProducts";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Products from "./Products";

const mockStore = configureStore([]);
describe("render show products component", () => {
  let store;
  const products = [
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
  ];
  beforeEach(() => {
    store = mockStore({
      productdata: {
        products: products,
      },
    });
  });
  it("renders show product comp", () => {
    const showproducts = render(
      <BrowserRouter>
        <Provider store={store}>
          <ShowProducts products={products} />
        </Provider>
      </BrowserRouter>
    );
    expect(showproducts).toBeTruthy();
  });
});
