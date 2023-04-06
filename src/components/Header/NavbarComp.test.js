// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import NavbarComp from "./NavbarComp";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";
// import { useSelector } from "react-redux";
// import { shallow } from "enzyme";

// const mockStore = configureStore([]);
// describe("NavbarComp ", () => {
//   const isLogin = false;
//   const setLogin = jest.fn();
//   let store;
//   const products = [
//     {
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
//     },
//     {
//       id: 2,
//       title: "iPhone X",
//       description:
//         "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//       price: 899,
//       discountPercentage: 17.94,
//       rating: 4.44,
//       stock: 34,
//       brand: "Apple",
//       category: "smartphones",
//       thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//       images: "https://i.dummyjson.com/data/products/2/3.jpg",
//       slider: [
//         "https://i.dummyjson.com/data/products/2/1.jpg",
//         "https://i.dummyjson.com/data/products/2/2.jpg",
//         "https://i.dummyjson.com/data/products/2/3.jpg",
//         "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//       ],
//     },
//   ];
//   const cartLength = 2;

//   beforeEach(() => {
//     store = mockStore({
//       productdata: {
//         products: products,
//         cart: new Array(cartLength).fill({}),
//         cartTotalQuantity: cartLength,
//       },
//     });
//   });

//   it("render navbarcomp", () => {
//     const NavbarComponent = render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <NavbarComp isLogin={isLogin} setLogin={setLogin} />
//         </Provider>
//       </BrowserRouter>
//     );

//     expect(NavbarComponent).toBeTruthy();
//     expect(screen.queryByText(`Cart(${cartLength})`)).toBeDefined();
//   });

//   it("navigate to login comp", () => {
//     const NavbarComponent = render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <NavbarComp isLogin={isLogin} setLogin={setLogin} />
//         </Provider>
//       </BrowserRouter>
//     );

//     const loginButton = screen.getByTestId("login-button");
//     fireEvent.click(loginButton);
//     expect(window.location.pathname).toEqual("/login");
//   });
//   it("navigate to  comp", () => {
//     const NavbarComponent = render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <NavbarComp isLogin={isLogin} setLogin={setLogin} />
//         </Provider>
//       </BrowserRouter>
//     );

//     const logoutButton = screen.getByTestId("logout-button");
//     fireEvent.click(logoutButton);
//     expect(window.location.pathname).toEqual("/login");
//   });
// });

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import NavbarComp from "./NavbarComp";
import { shallow } from "enzyme";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const mockStore = configureStore([]);
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

describe("NavbarComp", () => {
  let store;
  let component;
  const cart = [];
  const cartTotalQuantity = 0;

  beforeEach(() => {
    store = mockStore({
      productdata: {
        products: products,
      },
    });

    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavbarComp
            isLogin={false}
            setLogin={() => {}}
            cart={cart}
            cartTotalQuantity={cartTotalQuantity}
          />
        </BrowserRouter>
      </Provider>
    );
  });

  it("renders the website heading", () => {
    expect(component.queryByText("E-commerce")).toBeDefined();
  });

  it("renders the cart with cartTotalQuantity", () => {
    expect(component.queryByText(/Cart\(0\)/i)).toBeDefined();
  });

  it("renders the login button when isLogin is false", () => {
    expect(component.queryByTestId("login-button")).toBeDefined();
    fireEvent.click(component.queryByTestId("login-button"));
    expect(window.location.pathname).toEqual("/login");
  });

  it("renders the logout button when isLogin is true", () => {
    component.rerender(
      <Provider store={store}>
        <BrowserRouter>
          <NavbarComp
            isLogin={true}
            setLogin={() => {}}
            cart={cart}
            cartTotalQuantity={cartTotalQuantity}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(component.queryByTestId("logout-button")).toBeDefined();
  });
  it("navigate to myorders page on clicking myorders button", () => {
    component = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavbarComp
            isLogin={false}
            setLogin={() => {}}
            cart={cart}
            cartTotalQuantity={cartTotalQuantity}
          />
        </Provider>
      </BrowserRouter>
    );
    const myOrdersButton = component.getAllByTestId("myOrdersButton");
    expect(myOrdersButton.length).toBeGreaterThan(0);
    fireEvent.click(myOrdersButton[0]);

    expect(window.location.pathname).toEqual("/myorders");
  });
  it("navigate to login page on clicking login button", () => {
    component = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavbarComp
            isLogin={false}
            setLogin={() => {}}
            cart={cart}
            cartTotalQuantity={cartTotalQuantity}
          />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = component.getAllByTestId("login-button");
    expect(loginButton.length).toBeGreaterThan(0);
    fireEvent.click(loginButton[0]);

    expect(window.location.pathname).toEqual("/login");
  });
  it("displays login link when cart is empty", () => {
    const cart = [];
    const cartTotalQuantity = 0;
    component = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavbarComp
            cart={cart}
            cartTotalQuantity={cartTotalQuantity}
            isLogin={false}
            setLogin={() => {}}
          />
        </Provider>
      </BrowserRouter>
    );
    const loginLink = component.queryAllByRole("link", { name: "Cart(0)" });
    expect(loginLink.length).toBeGreaterThan(0);
    expect(loginLink[0].getAttribute("href")).toBe("/login");
  });
  //   it("displays cart link when cart is not empty", () => {
  //     const cart = [
  //       {
  //         id: 1,
  //         title: "iPhone 9",
  //         description: "An apple mobile which is nothing like apple",
  //         price: 549,
  //         discountPercentage: 12.96,
  //         rating: 4.69,
  //         stock: 94,
  //         brand: "Apple",
  //         category: "smartphones",
  //         thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //         images: "https://i.dummyjson.com/data/products/1/3.jpg",
  //         slider: [
  //           "https://i.dummyjson.com/data/products/1/1.jpg",
  //           "https://i.dummyjson.com/data/products/1/2.jpg",
  //           "https://i.dummyjson.com/data/products/1/3.jpg",
  //           "https://i.dummyjson.com/data/products/1/4.jpg",
  //           "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  //         ],
  //       },
  //       {
  //         id: 2,
  //         title: "iPhone X",
  //         description:
  //           "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  //         price: 899,
  //         discountPercentage: 17.94,
  //         rating: 4.44,
  //         stock: 34,
  //         brand: "Apple",
  //         category: "smartphones",
  //         thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  //         images: "https://i.dummyjson.com/data/products/2/3.jpg",
  //         slider: [
  //           "https://i.dummyjson.com/data/products/2/1.jpg",
  //           "https://i.dummyjson.com/data/products/2/2.jpg",
  //           "https://i.dummyjson.com/data/products/2/3.jpg",
  //           "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  //         ],
  //       },
  //     ];
  //     const cartTotalQuantity = 1;
  //     component = render(
  //       <BrowserRouter>
  //         <Provider store={store}>
  //           <NavbarComp
  //             cart={cart}
  //             cartTotalQuantity={cartTotalQuantity}
  //             isLogin={false}
  //             setLogin={() => {}}
  //           />
  //         </Provider>
  //       </BrowserRouter>
  //     );
  //     const cartLink = component.queryAllByRole("link", { name: "Cart(2)" });
  //     expect(cartLink.length).toBeGreaterThanOrEqual(0);
  //     expect(cartLink[0].getAttribute("href")).toBe("/cart");
  //   });
});
