// // import React from 'react';
// // import { shallow } from 'enzyme';
// // import Loginpage from './Loginpage';
// // import '../../../setupTests';

// // describe('LoginForm', () => {
// //   it('submits the form with user credentials', () => {
// //     const mockSubmit = jest.fn();
// //     const wrapper = shallow(<Loginpage onSubmit={mockSubmit} />);

// //     wrapper.find('input[name="email"]').simulate('change', {
// //       target: { name: 'email', value: 'pasumarthylakshmi2000@gmail.com' },
// //     });
// //     wrapper.find('input[name="password"]').simulate('change', {
// //       target: { name: 'password', value: 'Lakshmi@9999' },
// //     });

// //     wrapper.find('form').simulate('submit', { preventDefault() {} });

// //     expect(mockSubmit).toHaveBeenCalledTimes(1);
// //     expect(mockSubmit).toHaveBeenCalledWith({
// //       email: 'pasumarthylakshmi2000@gmail.com',
// //       password: 'Lakshmi@9999',
// //     });
// //   });
// // });

import { render, screen, fireEvent, act } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Loginpage from "./Loginpage";
import Products from "../ProductsPage/Products";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { hashHistory } from "react-router-redux";
import { Provider } from "react-redux";

import store from "../../../redux/store/configureStore";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Loginpage", () => {
  test("renders email and password inputs", () => {
    render(
      <BrowserRouter>
        <Loginpage />
      </BrowserRouter>
    ).container;

    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeDefined;
    const passwordInput = screen.getByTestId("password");
    expect(passwordInput).toBeDefined();
  });
  test("calls onSubmit with email and password when submit button is clicked", () => {
    const onSubmit = jest.fn();
    render(
      <BrowserRouter>
        <Loginpage onSubmit={onSubmit} />
      </BrowserRouter>
    ).container;
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    // const submitButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, {
      target: { value: "pasumarthylakshmi2000@gmail.com" },
    });
    expect(emailInput.value).toBe("pasumarthylakshmi2000@gmail.com");

    fireEvent.change(passwordInput, { target: { value: "Lakshmi@9999" } });
    expect(passwordInput.value).toBe("Lakshmi@9999");
    const submitButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(submitButton);
    // expect(onSubmit).toHaveBeenCalledWith({
    //   email: "pasumarthylakshmi2000@gmail.com",
    //   password: "Lakshmi@9999",
    // });
    // expect(history.location.pathname).toBe("/products");
  });
  test("test whether redirecting to products page or not", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    ).container;
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(emailInput, {
      target: { value: "pasumarthylakshmi2000@gmail.com" },
    });
    fireEvent.change(passwordInput, { target: { value: "Lakshmi@9999" } });
    fireEvent.click(submitButton);
    expect(window.location.pathname).toBe("/products");
  });
  //   test("submit button should be disabled if email and password are not valid", () => {
  //     const onSubmit = jest.fn();
  //     render(<Loginpage onSubmit={onSubmit} />);
  //     const emailInput = screen.getByTestId("email");
  //     const passwordInput = screen.getByTestId("password");
  //     const submitButton = screen.getByRole("button", { name: /login/i });

  //     act(() => {
  //       fireEvent.change(emailInput, {
  //         target: { value: "pasumarthylakshmi2000@gmail.com" },
  //       });
  //       fireEvent.change(passwordInput, { target: { value: "Lakshmi@9999" } });
  //       fireEvent.click(submitButton);
  //     });
  // expect(onSubmit).toHaveBeenCalledWith({
  //      email: "pasumarthylakshmi2000@gmail.com",
  //      password: "Lakshmi@9999",
  //    });

  // expect(onSubmit).toHaveBeenCalled();
  // expect(onSubmit).toBeCalledWith({
  //   email:'pasumarthylakshmi2000@gmail.com',
  //   password:'Lakshmi@9999'
  // })
  //     expect(onSubmit).toHaveBeenCalledWith({
  //       email:'pasumarthylakshmi2000@gmail.com',
  //       password:'Lakshmi@9999'
  //     });
  //   });
});

// import React from 'react';
// import { shallow } from 'enzyme';
// import Loginpage from './Loginpage';
// describe('Test case for testing login',() =>{
// let wrapper;
// test('username check',()=>
// {
// wrapper = shallow(<Loginpage />);
// wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'pasumarthylakshmi2000@gmail.com'}});
// expect(wrapper.state('username')).toEqual('krishankantsinghal');
// })
// it('password check',()=>{
// wrapper = shallow(<Login/>);
// wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krishankant123'}});
// expect(wrapper.state('password')).toEqual('krishankant123');
// })
// it('login check with right data',()=>{
// wrapper = shallow(<Login/>);
// wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'krishankantsinghal'}});
// wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krishankant123'}});
// wrapper.find('button').simulate('click');
// expect(wrapper.state('isLogined')).toBe(true);
// })
// it('login check with wrong data',()=>{
// wrapper = shallow(<Login/>);
// wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'krishankantsinghal'}});
// wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krishankant1234'}});
// wrapper.find('button').simulate('click');
// expect(wrapper.state('isLogined')).toBe(false);
// })
// })
