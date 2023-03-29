// import { render, screen, fireEvent, act } from "@testing-library/react";
// import Loginpage from "./Loginpage";
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

// // jest.mock('./Loginpage.js')
// describe("Login form testing", () => {
//   test("renders login form", () => {
//     render(
//       <BrowserRouter>
//         <Loginpage />
//       </BrowserRouter>
//     );
//   });
//   test("email and password fields accept user input", () => {
//     render(
//       <BrowserRouter>
//         <Loginpage />
//       </BrowserRouter>
//     ).container;
//     const emailInput = screen.getByTestId("email");
//     const passwordInput = screen.getByTestId("password");

//     fireEvent.change(emailInput, {
//       target: { value: "pasumarthylakshmi2000@gmail.com" },
//     });
//     expect(emailInput.value).toBe("pasumarthylakshmi2000@gmail.com");
//     fireEvent.change(passwordInput, {
//       target: { value: "Lakshmi@9999" },
//     });
//     expect(passwordInput.value).toBe("Lakshmi@9999");
//   });

//   test("login form submission with invalid credentials", async () => {
//     const mockSubmit = jest.fn();
//     render(
//       <BrowserRouter>
//         <Loginpage onSubmit={mockSubmit} />
//       </BrowserRouter>
//     );

//     const emailField = screen.getByTestId("email");
//     const passwordField = screen.getByTestId("password");
//     const submitButton = screen.getByRole("button", { name: "Login" });

//     fireEvent.change(emailField, {
//       target: { value: "pasumarthylakshmi2000@gmail.com" },
//     });
//     fireEvent.change(passwordField, { target: { value: "Lakshmi@9999" } });
//     fireEvent.click(submitButton);

//     // expect(onSubmit).not.toHaveBeenCalledTimes(1);

//     // expect(onSubmit).toHaveBeenCalledWith({
//     //   email: "pasumarthylakshmi2000@gmail.com",
//     //   password: "Lakshmi@9999",
//     // });
//     // expect(mockSubmit).toHaveBeenCalled();
//   });
// });

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Loginpage from "./Loginpage";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { useState, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";

describe("Login Component testing", () => {
  test("renders Loginpage component", () => {
    render(
      <BrowserRouter>
        <Loginpage />
      </BrowserRouter>
    );
  });
  test("renders email field", () => {
    render(
      <BrowserRouter>
        <Loginpage />
      </BrowserRouter>
    );
    // const emailField = screen.getByTestId("email");
    expect(screen.getByTestId("email")).toBeInTheDocument();
  });
  test("renders password field", () => {
    render(
      <BrowserRouter>
        <Loginpage />
      </BrowserRouter>
    );
    // const passwordField = screen.getByTestId("password");
    expect(screen.getByTestId("password")).toBeInTheDocument();
  });
  test("renders email field", () => {
    render(
      <BrowserRouter>
        <Loginpage />
      </BrowserRouter>
    );
    const submitButton = screen.getByRole("button", { name: "Login" });
    expect(submitButton).toBeInTheDocument();
  });
  test("form submission works correctly", async () => {
    const handleLogin = jest.fn();
    render(
      <BrowserRouter>
        <Loginpage handleLogin={handleLogin} />
      </BrowserRouter>
    );
    const emailField = screen.getByTestId("email");
    const passwordField = screen.getByTestId("password");
    const submitButton = screen.getByRole("button", { name: "Login" });

    // fireEvent.change(emailField, {
    //   target: { value: "pasumarthylakshmi2000@gmail.com" },
    // });
    // fireEvent.change(passwordField, { target: { value: "Lakshmi@9999" } });
    // fireEvent.click(submitButton);

    // const localEmail = localStorage.getItem("emailData");
    // const localPass = localStorage.getItem("passwordData");
    // expect(localEmail).toEqual("pasumarthylakshmi2000@gmail.com");
    // expect(localPass).toEqual("Lakshmi@9999");
    // userEvent.type(emailField, "pasumarthylakshmi2000@gmail.com");
    fireEvent.change(emailField, {
      target: { value: "pasumarthylakshmi2000@gmail.com" },
    });
    await expect(emailField.value).toEqual("pasumarthylakshmi2000@gmail.com");
    fireEvent.change(passwordField, {
      target: { value: "Lakshmi@9999" },
    });
    await expect(passwordField.value).toEqual("Lakshmi@9999");
    fireEvent.click(submitButton);
    expect(handleLogin).toHaveBeenCalled();
  });

  test("sets the email state from localstorage", () => {
    const Loginpage = () => {
      const [email, setEmail] = useState(null);
      const [password, setPassword] = useState(null);
      useEffect(() => {
        const localEmail = localStorage.getItem("emailData");
        const localPass = localStorage.getItem("passwordData");
        if (localEmail) {
          setEmail(localEmail);
        }
        if (localPass) {
          setPassword(localPass);
        }
      }, []);
      return null;
    };
    const mockEmail = "pasumarthylakshmi2000@gmail.com";
    localStorage.setItem("emailData", mockEmail);

    render(
      <BrowserRouter>
        <Loginpage />
      </BrowserRouter>
    );

    expect(screen.getByText(mockEmail)).toBeDefined();
  });
});
