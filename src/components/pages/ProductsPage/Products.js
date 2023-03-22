import React, { useState, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProductsStart,
  getTotals,
  loadOrdersStart,
} from "../../../redux/actions/actions";
import "./Products.scss";
import Spinner from "react-bootstrap/Spinner";
import Loading from "./Loading";
const ShowProducts = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./ShowProducts")), 500);
  });
});
function Products() {
  const dispatch = useDispatch();
  const { products, loading, cart } = useSelector((state) => state.productdata);
  //    console.log("Product data:", products);
  useEffect(() => {
    dispatch(loadProductsStart());
    dispatch(loadOrdersStart());
  }, []);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12 mb-3">
            <h1 className="product-heading display-6 fw-bolder text-center">
              Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <Suspense
            fallback={
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            }
          >
            <ShowProducts products={products} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Products;
