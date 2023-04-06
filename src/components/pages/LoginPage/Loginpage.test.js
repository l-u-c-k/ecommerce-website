// // import { render, screen, fireEvent, act } from "@testing-library/react";
// // import Loginpage from "./Loginpage";
// // import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

// // // jest.mock('./Loginpage.js')
// // describe("Login form testing", () => {
// //   test("renders login form", () => {
// //     render(
// //       <BrowserRouter>
// //         <Loginpage />
// //       </BrowserRouter>
// //     );
// //   });
// //   test("email and password fields accept user input", () => {
// //     render(
// //       <BrowserRouter>
// //         <Loginpage />
// //       </BrowserRouter>
// //     ).container;
// //     const emailInput = screen.getByTestId("email");
// //     const passwordInput = screen.getByTestId("password");

// //     fireEvent.change(emailInput, {
// //       target: { value: "pasumarthylakshmi2000@gmail.com" },
// //     });
// //     expect(emailInput.value).toBe("pasumarthylakshmi2000@gmail.com");
// //     fireEvent.change(passwordInput, {
// //       target: { value: "Lakshmi@9999" },
// //     });
// //     expect(passwordInput.value).toBe("Lakshmi@9999");
// //   });

// //   test("login form submission with invalid credentials", async () => {
// //     const mockSubmit = jest.fn();
// //     render(
// //       <BrowserRouter>
// //         <Loginpage onSubmit={mockSubmit} />
// //       </BrowserRouter>
// //     );

// //     const emailField = screen.getByTestId("email");
// //     const passwordField = screen.getByTestId("password");
// //     const submitButton = screen.getByRole("button", { name: "Login" });

// //     fireEvent.change(emailField, {
// //       target: { value: "pasumarthylakshmi2000@gmail.com" },
// //     });
// //     fireEvent.change(passwordField, { target: { value: "Lakshmi@9999" } });
// //     fireEvent.click(submitButton);

// //     // expect(onSubmit).not.toHaveBeenCalledTimes(1);

// //     // expect(onSubmit).toHaveBeenCalledWith({
// //     //   email: "pasumarthylakshmi2000@gmail.com",
// //     //   password: "Lakshmi@9999",
// //     // });
// //     // expect(mockSubmit).toHaveBeenCalled();
// //   });
// // });

// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import Loginpage from "./Loginpage";
// import "@testing-library/jest-dom/extend-expect";
// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";
// import { useState, useEffect } from "react";

// import { BrowserRouter } from "react-router-dom";

// describe("Login Component testing", () => {
//   test("renders Loginpage component", () => {
//     render(
//       <BrowserRouter>
//         <Loginpage />
//       </BrowserRouter>
//     );
//   });
//   test("renders email field", () => {
//     render(
//       <BrowserRouter>
//         <Loginpage />
//       </BrowserRouter>
//     );
//     // const emailField = screen.getByTestId("email");
//     expect(screen.getByTestId("email")).toBeInTheDocument();
//   });
//   test("renders password field", () => {
//     render(
//       <BrowserRouter>
//         <Loginpage />
//       </BrowserRouter>
//     );
//     // const passwordField = screen.getByTestId("password");
//     expect(screen.getByTestId("password")).toBeInTheDocument();
//   });
//   test("renders email field", () => {
//     render(
//       <BrowserRouter>
//         <Loginpage />
//       </BrowserRouter>
//     );
//     const submitButton = screen.getByRole("button", { name: "Login" });
//     expect(submitButton).toBeInTheDocument();
//   });
//   test("form submission works correctly", async () => {
//     const handleLogin = jest.fn();
//     render(
//       <BrowserRouter>
//         <Loginpage handleLogin={handleLogin} />
//       </BrowserRouter>
//     );
//     const emailField = screen.getByTestId("email");
//     const passwordField = screen.getByTestId("password");
//     const submitButton = screen.getByRole("button", { name: "Login" });

//     // fireEvent.change(emailField, {
//     //   target: { value: "pasumarthylakshmi2000@gmail.com" },
//     // });
//     // fireEvent.change(passwordField, { target: { value: "Lakshmi@9999" } });
//     // fireEvent.click(submitButton);

//     // const localEmail = localStorage.getItem("emailData");
//     // const localPass = localStorage.getItem("passwordData");
//     // expect(localEmail).toEqual("pasumarthylakshmi2000@gmail.com");
//     // expect(localPass).toEqual("Lakshmi@9999");
//     // userEvent.type(emailField, "pasumarthylakshmi2000@gmail.com");
//     fireEvent.change(emailField, {
//       target: { value: "pasumarthylakshmi2000@gmail.com" },
//     });
//     await expect(emailField.value).toEqual("pasumarthylakshmi2000@gmail.com");
//     fireEvent.change(passwordField, {
//       target: { value: "Lakshmi@9999" },
//     });
//     await expect(passwordField.value).toEqual("Lakshmi@9999");
//     fireEvent.click(submitButton);
//     expect(handleLogin).toHaveBeenCalled();
//   });

//   // test("updates state with values from localstorage", () => {
//   //   const setLogin = jest.fn();
//   //   localStorage.setItem("emailData", "pasumarthylakshmi2000@gmail.com");
//   //   localStorage.setItem("passwordData", "Lakshmi@9999");
//   //   render(
//   //     <BrowserRouter>
//   //       <Loginpage setLogin={setLogin} />
//   //     </BrowserRouter>
//   //   );
//   //   expect(
//   //     screen.getByText("pasumarthylakshmi2000@gmail.com")
//   //   ).toBeInTheDocument();
//   // expect(screen.getByText("Lakshmi@9999")).toBeInTheDocument();
//   //});
// });

import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Loginpage from "./Loginpage";
import "@testing-library/jest-dom/extend-expect";

describe("LoginPage testing", () => {
  it("testing whether login page is being rendered or not", () => {
    render(
      <BrowserRouter>
        <Loginpage />
      </BrowserRouter>
    );
  });
  it("displays error message or not when we give wrong credentials", () => {
    render(
      <BrowserRouter>
        <Loginpage />
      </BrowserRouter>
    );
    const emailError = screen.getByTestId("emailerror");
    expect(emailError).toBeDefined();
    const passworderror = screen.getByTestId("passworderror");
    expect(passworderror).toBeDefined();
  });

  it("checking email and password fields", async () => {
    const setLogin = jest.fn();
    const initialEmailValue = "pasumarthylakshmi2000@gmail.com";
    const initialPasswordValue = "Lakshmi@9999";
    render(
      <BrowserRouter>
        <Loginpage setLogin={setLogin} />
      </BrowserRouter>
    );

    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const submitButton = screen.getByRole("button", { name: /login/i });
    fireEvent.change(emailInput, {
      target: { value: "pasumarthylakshmi2000@gmail.com" },
    });
    expect(emailInput.value).toEqual(initialEmailValue);
    fireEvent.change(passwordInput, {
      target: { value: "Lakshmi@9999" },
    });
    expect(passwordInput.value).toEqual(initialPasswordValue);
    fireEvent.click(submitButton);
  });
  // it("should retrieve email and password from localstorage and compare with initial values", () => {
  //   const email = "pasumarthylakshmi2000@gmail.com";
  //   const pass = "Lakshmi@9999";
  //   const setLogin = jest.fn();
  //   render(
  //     <BrowserRouter>
  //       <Loginpage />
  //     </BrowserRouter>
  //   );

  //   const retrievedEmail = localStorage.getItem("emailData");
  //   const retrivedPassword = localStorage.getItem("passwordData");

  //   expect(retrievedEmail).toEqual(email);
  //   expect(retrivedPassword).toEqual(pass);

  //   if (email == retrievedEmail && pass == retrivedPassword) {
  //     expect(window.location.pathname).toEqual("/products");
  //   }
  // });
});
