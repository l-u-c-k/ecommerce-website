import React, { useEffect, useRef } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import "./CheckoutPage.scss";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createOrder, loadOrdersStart } from "../../../redux/actions/actions";
import { forwardRef } from "react";

var initialState = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
};

const contactRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object().shape({
  firstname: yup
    .string()
    .max(30, "Firstname should not exceed 30 characters")
    .required("Please enter firstname"),
  lastname: yup
    .string()
    .max(30, "Lastname should not exceed 30 characters")
    .required("Please enter lastname"),
  phone: yup
    .string()
    .matches(contactRegExp, "Phone number is not valid")
    .min(10, "too short")
    .max(10, "too long")
    .required("Please Enter the phone number"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please Enter email address"),
  address: yup
    .string()
    .required("Please enter address")
    .max(100, "Address should not exceed 100 characters"),
  city: yup.string().required("Please enter city"),
  state: yup.string().required("Please enter state"),
  zipCode: yup.string().required("Please enter zipcode"),
});
const Input = forwardRef((props, ref) => (
  <input {...props} ref={ref} required />
));
const TextArea = forwardRef((props, ref) => <textarea ref={ref} {...props} />);

function CheckoutPage1() {
  const { cart, cartTotalAmount, orders } = useSelector(
    (state) => state.productdata
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const textAreaRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.focus();

    dispatch(loadOrdersStart());
  }, []);
  return (
    <div>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("values:", typeof values);
          dispatch(
            createOrder({
              ...values,

              cart: cart,
              cartTotalAmount: cartTotalAmount,
              status: "order placed successfully",
              orderPlacedOn: new Date().toLocaleDateString("en-GB"),
            })
          );

          cartTotalAmount === 0
            ? toast.error(
                "Sorry Order cant be placed because no items in cart",
                { autoClose: 1000 }
              )
            : toast.success("Order Placed Successfully", { autoClose: 1000 });
        }}
      >
        <div className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <div className="card">
                  <div className="card-header">
                    <h4 style={{ cursor: "pointer" }}>Basic Information</h4>
                  </div>
                  <Form>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <p>
                              <b></b>
                              <Field
                                name="firstname"
                                type="text"
                                className="form-control input-field"
                                placeholder="FirstName"
                                style={{ borderColor: "violet" }}
                              ></Field>

                              <br />
                              <span>
                                <ErrorMessage
                                  name="firstname"
                                  className="errmessage"
                                >
                                  {(msg) => (
                                    <div style={{ color: "red" }}>{msg}</div>
                                  )}
                                </ErrorMessage>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <Field
                              name="lastname"
                              type="text"
                              className="form-control input-field"
                              placeholder="LastName"
                              style={{ borderColor: "violet" }}
                            ></Field>

                            <br />
                            <span>
                              <ErrorMessage
                                name="lastname"
                                className="errmessage"
                                ref={nameRef}
                              >
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <Field name="phone">
                              {({ field }) => (
                                <Input
                                  {...field}
                                  type="text"
                                  className="form-control input-field"
                                  placeholder="Phone Number"
                                  style={{ borderColor: "violet" }}
                                  ref={phoneRef}
                                />
                              )}
                            </Field>

                            <br />
                            <span>
                              <ErrorMessage name="phone" className="errmessage">
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <Field
                              name="email"
                              type="email"
                              className="form-control input-field"
                              placeholder="Email"
                              style={{ borderColor: "violet" }}
                            ></Field>

                            <br />
                            <span>
                              <ErrorMessage name="email" className="errmessage">
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-3">
                            <Field name="address">
                              {({ field }) => (
                                <TextArea
                                  {...field}
                                  as="textarea"
                                  type="text"
                                  className="form-control input-field"
                                  rows="3"
                                  placeholder="Address:enter only DrNo and street"
                                  style={{ borderColor: "violet" }}
                                  ref={textAreaRef}
                                />
                              )}
                            </Field>

                            <br />
                            <span>
                              <ErrorMessage
                                name="address"
                                className="errmessage"
                              >
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <Field
                              name="city"
                              type="text"
                              className="form-control input-field"
                              placeholder="City"
                              style={{ borderColor: "violet" }}
                            ></Field>

                            <br />
                            <span>
                              <ErrorMessage name="city" className="errmessage">
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <Field
                              name="state"
                              type="text"
                              className="form-control input-field"
                              placeholder="State"
                              style={{ borderColor: "violet" }}
                            ></Field>

                            <br />
                            <span>
                              <ErrorMessage name="state" className="errmessage">
                                {(msg) => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <p>
                              <Field
                                name="zipCode"
                                type="text"
                                className="form-control input-field"
                                placeholder="ZipCode"
                                style={{ borderColor: "violet" }}
                              ></Field>

                              <br />
                              <span>
                                <ErrorMessage
                                  name="zipCode"
                                  className="errmessage"
                                >
                                  {(msg) => (
                                    <div style={{ color: "red" }}>{msg}</div>
                                  )}
                                </ErrorMessage>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group text-end">
                            <center>
                              {" "}
                              {cartTotalAmount === 0 ? (
                                <button
                                  type="submit"
                                  disable={true}
                                  className="btn btn-warning"
                                >
                                  Place Order
                                </button>
                              ) : (
                                <button
                                  type="submit"
                                  disable={true}
                                  className="btn btn-warning"
                                >
                                  Place Order
                                </button>
                              )}
                            </center>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 product-detail">
                <table className="table lg table-bordered">
                  <thead>
                    <tr>
                      <th width="50%">Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => {
                      return (
                        <tr>
                          <td>{item.title}</td>
                          <td>${item.price}</td>
                          <td>{item.quantity}</td>
                          <td>${item.quantity * item.price}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan="2" className="text-end fw-bold">
                        Grand Total
                      </td>
                      <td colSpan="2" className="text-end fw-bold">
                        ${cartTotalAmount}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <button
                    className="btn btn-secondary mt-5"
                    onClick={() => navigate("/products")}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default CheckoutPage1;
