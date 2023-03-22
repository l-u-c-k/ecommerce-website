import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CheckoutPage.scss";

function CheckoutPage() {
  const { cart, cartTotalAmount } = useSelector((state) => state.productdata);
  const [checkoutInput, setCheckoutInput] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleInput = (e) => {
    e.persist();
    setCheckoutInput({ ...checkoutInput, [e.target.name]: e.target.value });
  };

  const placeOrder=(e)=>{
    e.preventDefault();
    const data={
      firstname:checkoutInput.firstname,
      lastname:checkoutInput.lastname,
      phone:checkoutInput.phone,
      email:checkoutInput.email,
      address:checkoutInput.address,
      city:checkoutInput.city,
      state:checkoutInput.state,
      zipCode:checkoutInput.zipCode
    }
    

  }
  return (
    <>
      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header">
                  <h4>Basic Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label
                          className="float-start"
                          onChange={handleInput}
                          value={checkoutInput.firstname}
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label
                          className="float-start"
                          onChange={handleInput}
                          value={checkoutInput.lastname}
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label
                          className="float-start"
                          onChange={handleInput}
                          value={checkoutInput.phone}
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label
                          className="float-start"
                          onChange={handleInput}
                          value={checkoutInput.email}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label
                          className="float-start"
                          onChange={handleInput}
                          value={checkoutInput.address}
                        >
                          Full Address
                        </label>
                        <textarea rows="3" className="form-control"></textarea>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label
                          className="float-start"
                          onChange={handleInput}
                          value={checkoutInput.city}
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label
                          className="float-start"
                          onChange={handleInput}
                          value={checkoutInput.state}
                        >
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-3">
                        <label
                          className="float-start"
                          onChange={handleInput}
                          value={checkoutInput.zipCode}
                        >
                          Zip-Code
                        </label>
                        <input
                          type="text"
                          name="zipcode"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group text-end">
                        <center>
                          {" "}
                          <button className="btn btn-warning" onClick={placeOrder}>
                            Place Order
                          </button>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 product-details">
              <table className="table table-bordered">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
