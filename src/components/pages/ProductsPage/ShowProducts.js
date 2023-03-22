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

  // var mobileBrands = [
  //   "All",
  //   ...Array.from(
  //     new Set(
  //       products
  //         .filter((item) => (item.category == "smartphones" ? true : false))
  //         .map((item) => item.brand)
  //     )
  //   ),
  // ];
  // var laptopBrands = [
  //   "All",
  //   ...Array.from(
  //     new Set(
  //       products
  //         .filter((item) => (item.category == "laptops" ? true : false))
  //         .map((item) => item.brand)
  //     )
  //   ),
  // ];
  // var perfumeBrands = [
  //   "All",
  //   ...Array.from(
  //     new Set(
  //       products
  //         .filter((item) => (item.category == "fragrances" ? true : false))
  //         .map((item) => item.brand)
  //     )
  //   ),
  // ];

  // var skincareBrands = [
  //   "All",
  //   ...Array.from(
  //     new Set(
  //       products
  //         .filter((item) => (item.category == "skincare" ? true : false))
  //         .map((item) => item.brand)
  //     )
  //   ),
  // ];

  // var groceriesBrands = [
  //   "All",
  //   ...Array.from(
  //     new Set(
  //       products
  //         .filter((item) => (item.category == "groceries" ? true : false))
  //         .map((item) => item.brand)
  //     )
  //   ),
  // ];

  // var homedecorationBrands = [
  //   "All",
  //   ...Array.from(
  //     new Set(
  //       products
  //         .filter((item) => (item.category == "home-decoration" ? true : false))
  //         .map((item) => item.brand)
  //     )
  //   ),
  // ];

  // // const filterProduct = (cat) => {
  // //   var updatedList = products.filter((x) => x.category === cat);
  // //   setFilter(updatedList);
  // // };
  const [filterObj, setFilterObj] = useState({ Category: "", Brand: "" });
  // console.log("fileterObj outside return :",filterObj)

  return (
    <>
      <Container
        fluid
        className="filter-section mb-4 d-flex align-items-center justify-content-center"
      >
        {/* <button
          className="btn btn-outline-dark me-2 mb-2"
          onClick={() => setFilter(products)}
        >
          All
        </button> */}
        {/* {console.log("display List in show Products :", displayList)} */}
        <Row>
          <Col lg={3} xs={6} md={6} sm={6} className="column-contents">
            <h5 className="filter-heading">Select By Category:</h5>
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
          {/* <button
          className="btn btn-outline-dark me-2 mb-2"
          onClick={() => filterProduct("smartphones")}
        >
          Mobiles
        </button> */}
          {/* {console.log("Brand in show Products :",brand)} */}
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
        {/* <button
          className="btn btn-outline-dark me-2 mb-2"
          onClick={() => filterProduct("laptops")}
        >
          Laptops
        </button> */}
        {/* <Filter
          filterList="Perfumes"
          nameList={perfumeBrands}
          filter={filterObj}
          setFilter={setFilterObj}
          setDisplayList={setDisplayList}

        ></Filter> */}
        {/* <button
          className="btn btn-outline-dark me-2 mb-2"
          onClick={() => filterProduct("fragrances")}
        >
          Perfumes
        </button> */}
        {/* <Filter
          filterList="Skincare"
          nameList={skincareBrands}
          filter={filterObj}
          setFilter={setFilterObj}
          setDisplayList={setDisplayList}

        ></Filter> */}
        {/* <button
          className="btn btn-outline-dark me-2 mb-2"
          onClick={() => filterProduct("skincare")}
        >
          SkinCare
        </button> */}
        {/* <Filter
          filterList="Groceries"
          nameList={groceriesBrands}
          filter={filterObj}
          setFilter={setFilterObj}
          setDisplayList={setDisplayList}

        ></Filter> */}
        {/* <button
          className="btn btn-outline-dark me-2 mb-2"
          onClick={() => filterProduct("groceries")}
        >
          Groceries
        </button> */}
        {/* <Filter
          filterList="Home Decoration"
          nameList={homedecorationBrands}
          filter={filterObj}
          setFilter={setFilterObj}
          className="filter-list"
          setDisplayList={setDisplayList}

        ></Filter> */}
        {/* <button
          className="btn btn-outline-dark me-2 mb-2"
          onClick={() => filterProduct("home-decoration")}
        >
          Home Decoration
        </button> */}
        {/* <Dropdown title="Category">
          <Dropdown.Item>All</Dropdown.Item>
          <Dropdown.Menu title="Mobiles">
            <Dropdown.Item>Apple</Dropdown.Item>
            <Dropdown.Item>Samsung</Dropdown.Item>
            <Dropdown.Item>OPPO</Dropdown.Item>
            <Dropdown.Item>Huawei</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Menu title="Laptops">
            <Dropdown.Item>Apple</Dropdown.Item>
            <Dropdown.Item>Samsung</Dropdown.Item>
            <Dropdown.Item>Infinix</Dropdown.Item>
            <Dropdown.Item>Microsoft Surface</Dropdown.Item>
            <Dropdown.Item>HP Pavilion</Dropdown.Item>
          </Dropdown.Menu>

          <Dropdown.Menu title="Perfumes">
            <Dropdown.Item>Impression of Acqua Di Gio</Dropdown.Item>
            <Dropdown.Item>Royal_Mirage</Dropdown.Item>

            <Dropdown.Item>Fog Scent Xpressio</Dropdown.Item>
            <Dropdown.Item>Al Munakh</Dropdown.Item>
            <Dropdown.Item>Lord - Al-Rehab</Dropdown.Item>
            
          </Dropdown.Menu>
        </Dropdown> */}
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
                  <h5 className="card-title title fw-bold product-title">
                    {product.title}
                  </h5>
                  {/* <p className="card-text">
                    {product.description}
                  </p> */}
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
