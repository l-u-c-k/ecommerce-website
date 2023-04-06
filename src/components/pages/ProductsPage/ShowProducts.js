import React, { useState, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Products.scss";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Product from "../Product/Product";
import Filter from "./Filter";
import Dropdown from "rsuite/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function ShowProducts({ products }) {
  const { id } = useParams();
  var [displayList, setDisplayList] = useState(products);

  var category = [
    "All",
    ...Array.from(new Set(products.map((item) => item.category))),
  ];
  var [brand, setBrand] = useState([
    "All",
    ...Array.from(new Set(products.map((item) => item.brand))),
  ]);

  const [filterObj, setFilterObj] = useState({ Category: "", Brand: "" });

  return (
    <>
      <Container
        fluid
        className="filter-section mb-4 d-flex align-items-center justify-content-center"
      >
        <Row>
          <Col lg={3} xs={6} md={6} sm={6} className="column-contents">
            <h5 className="filter-heading" data-testid="selectcategory">
              Select By Category:
            </h5>
          </Col>
          <Col lg={3} xs={6} md={6} sm={6} className="column-contents">
            <Filter
              filterList="Category"
              nameList={category}
              filter={filterObj}
              setFilter={setFilterObj}
              setBrand={setBrand}
              setDisplayList={setDisplayList}
            ></Filter>
          </Col>

          <Col lg={3} xs={6} md={6} sm={6} className="column-contents">
            <h5 className="filter-heading">Select By Brand:</h5>
          </Col>
          <Col lg={3} xs={6} md={6} sm={6} className="column-contents">
            <Filter
              filterList="Brand"
              nameList={[...brand]}
              filter={filterObj}
              setFilter={setFilterObj}
              setDisplayList={setDisplayList}
              setBrand={setBrand}
            ></Filter>
          </Col>
        </Row>
      </Container>
      {displayList.map((product) => {
        return (
          <React.Fragment key={product.id}>
            <div className="col-md-4 mb-4 " key={product.id}>
              <div className="card h-90 text-center p-4" key={product.id}>
                <img
                  className="card-img-top"
                  src={product.thumbnail}
                  height="250px"
                />
                <div className="card-body">
                  <h5
                    className="card-title title fw-bold product-title"
                    data-test-id="producttitle"
                  >
                    {product.title}
                  </h5>

                  <p className="card-text title fw-bold">
                    PRICE:&nbsp;${product.price}
                  </p>
                  <p className="card-text title">
                    Discount:&nbsp;{product.discountPercentage}%
                  </p>
                  <p className="card-text title">
                    Rating:&nbsp;{product.rating}
                  </p>

                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-outline-secondary"
                    style={{ textDecoration: "none" }}
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default ShowProducts;
