import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loadUsersStart,
  loginUserAction,
} from "../../../redux/actions/actions";
import { setCookie } from "../../../utils/cookies";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./LoginPage.scss";

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Loginpage = ({ setLogin }) => {
  useEffect(() => {
    const localEmail = localStorage.getItem("emailData");
    const lacalPass = localStorage.getItem("passwordData");

    if (localEmail) {
      setEmail(localEmail);
    }
    if (lacalPass) {
      setPassword(lacalPass);
    }
  }, []);
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [getEmail, setEmail] = useState("");
  //  localStorage.getItem("emailData");
  const [getPassword, setPassword] = useState("");

  return (
    <>
      {getEmail != "" && getPassword != "" ? (
        (setLogin(true), navigate("/products"))
      ) : (
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values) => {
            if (
              values.email == "pasumarthylakshmi2000@gmail.com" &&
              values.password == "Lakshmi@9999"
            ) {
              localStorage.setItem(
                "emailData",
                "pasumarthylakshmi2000@gmail.com"
              );
              localStorage.setItem("passwordData", "Lakshmi@9999");
              setLogin(true);
              navigate("/products");
            }
          }}
        >
          {
            ({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="login">
                <div className="form">
                  <Form noValidate onSubmit={handleSubmit}>
                    <span>Login</span>
                    <Field
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Enter email id / username"
                      className="form-control inp_text"
                      data-testid="email"
                      ref={email}
                    />
                    <p className="error" data-testid="emailerror">
                      {errors.email && touched.email && errors.email}
                    </p>
                    <Field
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password"
                      className="form-control"
                      data-testid="password"
                      ref={password}
                    />
                    <p className="error" data-testid="passworderror">
                      {errors.password && touched.password && errors.password}
                    </p>
                    <button
                      type="submit"
                      name="submit"
                      data-testid="login-button"
                    >
                      Login
                    </button>
                  </Form>
                </div>
              </div>
            )
            //)
          }
        </Formik>
      )}
    </>
  );
};

export default Loginpage;
