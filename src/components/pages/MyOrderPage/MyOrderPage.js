import React, { useEffect, useState, useReducer, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadOrdersStart } from "../../../redux/actions/actions";
import { Col, Modal } from "react-bootstrap";
import "./MyOrderPage.scss";
import MyPortal from "../MyPortal/MyPortal";

function MyOrderPage() {
  const { orders } = useSelector((state) => state.productdata);
  // console.log("orders in orderpage:", orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOrdersStart());
  }, []);

  const handleClose = () => {
    viewDataDispatch({ type: "closeModal" });
  };
  const handleShow = (data) => {
    viewDataDispatch({ type: "showModal", data: data });
  };
  const viewDataReducer = (state, action) => {
    switch (action.type) {
      case "showModal":
        return { ...state, show: true, data: action.data };
      case "closeModal":
        return { ...state, show: false, data: "" };
      default:
        return state;
    }
  };
  const [viewData, viewDataDispatch] = useReducer(viewDataReducer, {
    show: false,
    data: "",
  });

  // const orderedProducts=orders.filter(order=>order.id===id).cart

  return (
    // <div className="container mt-5">
    //   <div className="row">
    //     {orders.map((item) => {
    //       return (
    //         <>
    //           {item.cart.map((cartitem) => {
    //             return (
    //               <div className="col-sm-6 mt-3">
    //                 <div className="card">
    //                   <div className="card-body">
    //                     <div className="row">
    //                       <div className="col-3">
    //                         <img
    //                           src={cartitem.thumbnail}
    //                           style={{ height: "50px", width: "50px" }}
    //                         />
    //                       </div>
    //                       <div className="col-9">
    //                         <h5>{cartitem.title}</h5>
    //                         <p>{cartitem.description}</p><br/>
    //                         <button className="btn btn-secondary">View Details</button>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             );
    //           })}
    //         </>
    //       );
    //     })}
    //   </div>
    // </div>
    <>
      <div className="container shadow  py-2 mt-5">
        <div className="row table-responsive">
          <table className="table  table-fixed accordion table-responsive">
            <thead className="mb-5 table-header">
              <tr className="table-dark">
                <th scope="col">Order Number</th>
                <th scope="col">Date</th>
                <th>No of Items</th>
                <th scope="col">Grand Total</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="flex-start">
              {orders.map((item) => {
                return (
                  <>
                    <tr
                      onClick={() => {
                        handleShow(item);
                      }}
                    >
                      <td>{item.id}</td>
                      <td>{item.orderPlacedOn}</td>
                      <td>{item.cart.length}</td>
                      <td>$ {item.cartTotalAmount}</td>
                      <td>{item.status}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <MyPortal>
            <Modal
              show={viewData.show}
              onHide={handleClose}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className="text-center"
            >
              <Modal.Header closeButton>
                <Modal.Title>Order Details</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-body">
                <div className="container ">
                  <div className="row">
                    {viewData.data != "" &&
                      viewData.data.cart.map((cartitem) => {
                        return (
                          <div className="col-sm-12 mt-3">
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-3">
                                    <Suspense
                                      fallback={
                                        <img src="src/Assets/images/loading-image.webp" />
                                      }
                                    >
                                      <img
                                        src={cartitem.thumbnail}
                                        style={{
                                          height: "75px",
                                          width: "75px",
                                        }}
                                      />
                                    </Suspense>
                                  </div>
                                  <div className="col-9">
                                    <h5>{cartitem.title}</h5>
                                    <p>
                                      Price:<span>$ {cartitem.price}</span>
                                    </p>
                                    <p>
                                      Quantity:<span>{cartitem.quantity}</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    {/* <div className="col-sm-12 mt-3">
                    <div className="card">
                      <div className="card-header">
                        <b>Order Summary</b>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-3">
                            <span className="float-start">
                              <b>Address:</b>
                            </span>
                          </div>
                          <div className="col-9">
                            <p className=" address-data float-start">
                              {viewData.data.address}
                            </p>
                          </div><br />

                          <div className="col-3">
                            <span className="float-start">
                              <b>Grand Total:</b>
                            </span>
                          </div>
                          <div className="col-9">
                            <p className="float-start price">
                              $ {viewData.data.cartTotalAmount}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                    <div className="col-sm-12 mt-3">
                      <div className="shipping-address-card">
                        <h6 className="card-title">Shipping Address</h6>
                        <div className="address-details mt-4">
                          <p className="name">
                            {viewData.data.firstname} {viewData.data.lastname}
                          </p>
                          <p className="address">{viewData.data.address}</p>
                          <p className="city-state-zip">
                            {viewData.data.city},{viewData.data.zipCode}
                          </p>
                          <p className="country">{viewData.data.state}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </MyPortal>
        </div>
      </div>
    </>
  );
}

export default MyOrderPage;
