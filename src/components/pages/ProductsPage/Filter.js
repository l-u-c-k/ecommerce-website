import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import Trail from "../EmployeeList/Trail";
import './filter.scss';
const Filter = ({
  filterList,
  menuList,
  nameList,
  filter,
  setFilter,
  setDisplayList,
  setBrand,
}) => {
  const [value, setValue] = useState("");
  var { products } = useSelector((state) => state.productdata);
  // console.log("Products: ",products);
  const handleSelect = async (e) => {
    setValue(e);
    console.log("in handle select:", e);

    e=="All"? filter[filterList]="" : filter[filterList] = e;

    console.log("FilterList in Filter:", filter.Brand);

    if (filterList == "Category" && filter.Category!="") {
      let newBrands = ["All",...Array.from(new Set(products
        .filter((item) => (item.category == filter.Category ? true : false))
        .map((item) => item.brand)))];
      console.log("New Brands: ", newBrands);
      setBrand(newBrands);
    }
    let newProducts = [];
    if (filter.Brand != "" && filter.Category!="") {
      newProducts = await [
        ...newProducts,
        ...products.filter((item) => {
          if (item.brand == filter.Brand && filter.Category==item.category) {
            return true;
          } else {
            return false;
          }
        }),
      ];
    } 
    else if(filter.Category!=""){
      newProducts = await [
        ...newProducts,
        ...products.filter((item) => {
          if (filter.Category==item.category) {
            return true;
          } else {
            return false;
          }
        }),
      ];
    }
    else if(filter.Brand!=""){
      newProducts = await [
        ...newProducts,
        ...products.filter((item) => {
          if (item.brand == filter.Brand) {
            return true;
          } else {
            return false;
          }
        }),
      ];
    }
    else {
      newProducts = [...products];
    }
    console.log("NewProducts in Filter: ", newProducts);
    setDisplayList(newProducts);
    // let newProducts = [];
    // if (
    //   filter.Category != "" ||
    //   filter.Brand != ""
    // ) {
    //   console.log("Hi1");
    //   if (filter.Mobiles != "") {
    //     if (filter.Mobiles == "All") {
    //       newProducts = await [
    //         ...newProducts,
    //         ...products.filter((item) => {
    //           if (item.category == "smartphones") {
    //             console.log("true item: ", item);
    //             return true;
    //           } else {
    //             return false;
    //           }
    //         }),
    //       ];
    //     } else {
    //       newProducts = await [
    //         ...newProducts,
    //         ...products.filter((item) => {
    //           if (
    //             item.brand == filter.Mobiles &&
    //             item.category == "smartphones"
    //           ) {
    //             console.log("true item: ", item);
    //             return true;
    //           } else {
    //             return false;
    //           }
    //         }),
    //       ];
    //     }
    //   }
    // }
    //   if (filter.Laptops != "") {
    //     newProducts = await [
    //       ...newProducts,
    //       ...products.filter((item) => {
    //         if (item.brand == filter.Laptops && item.category == "laptops") {
    //           console.log("true item: ", item);
    //           return true;
    //         } else {
    //           return false;
    //         }
    //       }),
    //     ];
    //   }
    //   if (filter.Perfumes != "") {
    //     newProducts = await [
    //       ...newProducts,
    //       ...products.filter((item) => {
    //         if (
    //           item.brand == filter.Perfumes &&
    //           item.category == "fragrances"
    //         ) {
    //           console.log("true item: ", item);
    //           return true;
    //         } else {
    //           return false;
    //         }
    //       }),
    //     ];
    //   }
    //   if (filter.Skincare != "") {
    //     newProducts = await [
    //       ...newProducts,
    //       ...products.filter((item) => {
    //         if (item.brand == filter.Skincare && item.category == "skincare") {
    //           console.log("true item: ", item);
    //           return true;
    //         } else {
    //           return false;
    //         }
    //       }),
    //     ];
    //   }
    // } else {
    //   console.log("Hi2");
    //   newProducts = [...products];
    // }
    // console.log("NewProducts in Filter: ", newProducts);
    // setDisplayList(newProducts);
  };
  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle
        variant="secondary"
        id="dropdown-basic"
        // style={{ width: "100px" }}
        className="dropdown-btn"
      >
        <span className="filter-heading">
          {value == "" ? filterList : value}
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        {nameList.map((name) => (
          <Dropdown.Item eventKey={name} style={{textDecoration:"none"}} className="menu-item" key={name}>{name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Filter;
