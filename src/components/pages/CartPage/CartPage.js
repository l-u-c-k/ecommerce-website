import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import {
  deleteFromCart,
  decrementCartQuantity,
  addToCart,
  clearCart,
  getTotals,
} from "../../../redux/actions/actions";
import "./CartPage.scss";

const CartPage = () => {
  const { cart, cartTotalAmount, products } = useSelector(
    (state) => state.productdata
  );

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);
  // console.log("in cart:", cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTotals());
  // }, [cart, dispatch]);

  const handleRemoveFromCart = (product) => {
    dispatch(deleteFromCart(product));
    dispatch(getTotals());
    sessionStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decrementCartQuantity(product));
    dispatch(getTotals());
    toast.error("item deleted from cart", { autoClose: 500 });
    sessionStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
    toast.success("item added to cart", { autoClose: 500 });
    sessionStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(getTotals());
    sessionStorage.setItem("cartItems", JSON.stringify(cart));
  };

  return (
    <>
      <div className="cart-container" style={{ cursor: "pointer" }}>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty </p>
            <div className="start-shopping">
              <Link to="/products">
                {/* <i class="bi bi-arrow-left"></i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div style={{ cursor: "pointer" }}>
            {/* <div className="title">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div> */}
            {/* <div className="cart-items">
              {cart.map((item) => {
                return (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-product d-flex">
                      <img src={item.images} height="100px" width="100px" />
                      <div>
                        <h3>{item.title}</h3>

                        <button
                          style={{ color: "black" }}
                          onClick={() => handleRemoveFromCart(item)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">${item.price}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(item)}>
                        -
                      </button>
                      <div className="count">{item.quantity}</div>
                      <button onClick={() => handleIncreaseQuantity(item)}>
                        +
                      </button>
                    </div>
                    <div className="cart-total">
                      ${item.quantity * item.price}
                    </div>
                  </div>
                );
              })}
            </div> */}
            <div className="container py-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product</th>
                          <th className="text-center">Price</th>
                          <th className="text-center">Quantity</th>
                          <th className="text-center">Total</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => {
                          return (
                            <tr>
                              <td width="15%" key={item.id}>
                                <img
                                  src={item.images}
                                  height="100px"
                                  width="100px"
                                />
                              </td>
                              <td>
                                <h5 className="product-titles">{item.title}</h5>
                              </td>
                              <td width="15%" className="product-titles">
                                {item.price}
                              </td>
                              <td width="15%">
                                <div className="input-group cart-product-quantity">
                                  <button
                                    onClick={() => handleDecreaseCart(item)}
                                  >
                                    -
                                  </button>
                                  <div className="count form-control text-center">
                                    {item.quantity}
                                  </div>
                                  <button
                                    onClick={() => handleIncreaseQuantity(item)}
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="15% product-titles">
                                ${item.quantity * item.price}
                              </td>
                              <td width="10%">
                                <button
                                  className="btn btn-secondary"
                                  style={{ color: "black" }}
                                  onClick={() => handleRemoveFromCart(item)}
                                >
                                  x
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="cart-summary">
              <button
                className="btn btn-secondary clear-cart"
                onClick={() => handleClearCart()}
              >
                Clear Cart
              </button>
              {/* <div className="cart-checkout">
                 <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button className="btn btn-secondary check-out-button">
                  Check Out
                </button>
                <div className="continue-shopping">
                  <Link to="/products">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>*/}
              <div className="col-md-8"></div>
              <div className="col-md-4 float-end" style={{ width: "250px" }}>
                <div className="card card-body mt-3">
                  <h4>
                    Sub Total:&nbsp;
                    <span>${cartTotalAmount}</span>
                  </h4>
                  <center>
                    <button
                      className="btn btn-secondary check-out"
                      onClick={() => navigate("/checkout1")}
                    >
                      Check Out
                    </button>
                  </center>
                  <hr />
                  <Link to="/products" style={{ textDecoration: "none" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default CartPage;
