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

const Loginpage = ({ setLogin, handleLogin, setEmailFun, setPasswordFun }) => {
  // const dispatch = useDispatch();

  useEffect(() => {
    // console.log("in useEffect")
    const localEmail = localStorage.getItem("emailData");
    // console.log("localEmail:",localEmail)
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

  // const { users } = useSelector((state) => state.data);
  // console.log("users:",users)
  // const [notification, setNotification] = useState("");
  // const [success, setSuccess] = useState(false);
  // const login = useSelector((state) => state.login.response);
  // useEffect(() => {
  //   if (login !== undefined) {
  //     setNotification(login.message);
  //     setSuccess(login.success);
  //     if (login.success) {
  //       setCookie("token", login.token, 1);
  //     }
  //   }
  // }, [login]);
  // useEffect(() => {
  //   setNotification("");
  //   setSuccess(false);
  // }, []);
  // useEffect(() => {
  //   dispatch(loadUsersStart());
  // }, []);
  return (
    <>
      {/* {!success ? <div>{notification}</div> : <Navigate to="/dashboard" />} */}
      {getEmail != "" && getPassword != "" ? (
        (setLogin(true), navigate("/products"))
      ) : (
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={(values) => {
            // Alert the input values of the form that we filled
            // alert(JSON.stringify(values));
            // dispatch(loginUserAction(values));
            // console.log("values:", values);
            //
            // if (
            //   localStorage.getItem("userName") === null &&
            //   localStorage.getItem("password") === null
            // ) {
            // localStorage.setItem("user", values.email); // writes name and password to local storage if not exists
            // localStorage.setItem("pass", values.password);
            // }
            // if (localStorage.getItem("user") === values.email) {
            //   if (localStorage.getItem("pass") === values.password) {
            //     navigate("/products");
            //     console.log("in local storage", localStorage.getItem("user"));
            //   }
            // } else {
            //   navigate("/login");
            // }
            // console.log("emailvalue:",values.email)
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
              // getEmail && getPassword ? (
              //   navigate('/products')
              // ) : (
              <div className="login">
                <div className="form">
                  {/* Passing handleSubmit parameter tohtml form onSubmit property */}

                  <Form noValidate onSubmit={handleSubmit}>
                    <span>Login</span>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
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
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.email && touched.email && errors.email}
                    </p>
                    {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
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
                    {/* If validation is not passed show errors */}
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                    {/* Click on submit button to submit the form */}
                    <button
                      type="submit"
                      name="submit"
                      data-testid="login-button"
                      onClick={handleLogin}
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
