import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./NavbarComp.scss";
import { useSelector, useDispatch } from "react-redux";
import { loadOrdersStart } from "../../redux/actions/actions";
import { ThemeContext, themes } from "../../toggle-context/ThemeContext";
import Thememode from "./thememode";

function NavbarComp({ isLogin, setLogin }) {
  const { cart, cartTotalQuantity } = useSelector((state) => state.productdata);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    setLogin(false);
    // window.location.reload();
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleOrders = () => {
    navigate("/myorders");
  };

  useEffect(() => {
    dispatch(loadOrdersStart());
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
        <Container>
          <Navbar.Brand className="website-heading fw-bold fs-4">
            E-commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link as={Link} to="/products">
                <span className="text">Products</span>
              </Nav.Link> */}
              {cart.length === 0 ? (
                <Nav.Link
                  as={Link}
                  to="/login"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fa fa-shopping-cart me-1"></i>
                  <span className="text">Cart({cartTotalQuantity})</span>
                </Nav.Link>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/cart"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fa fa-shopping-cart me-1"></i>
                  <span className="text">Cart({cartTotalQuantity})</span>
                </Nav.Link>
              )}
              <button
                className="btn btn-light logout-button"
                style={{ textDecoration: "none" }}
                onClick={handleOrders}
              >
                MyOrders
              </button>
              &nbsp;&nbsp;&nbsp;
              {/* <Nav.Link
                as={Link}
                to="/login"
                style={{ textDecoration: "none" }}
              >
                <span className="text">Login</span>
              </Nav.Link> */}
              {/* <Nav.Link as={Link} to="/cart">
                <i className="fa fa-shopping-cart me-1"></i>
                <span className="text">Cart({cartTotalQuantity})</span>
              </Nav.Link> */}
              {!isLogin ? (
                <button
                  className="btn btn-light logout-button"
                  onClick={handleLogin}
                  style={{ textDecoration: "none" }}
                >
                  Login
                </button>
              ) : (
                <button
                  className="btn btn-light logout-button"
                  onClick={handleLogout}
                  style={{ textDecoration: "none" }}
                >
                  Logout
                </button>
              )}
              {/* <button
                className="btn btn-light logout-button"
                onClick={handleLogin}
                style={{ textDecoration: "none" }}
              >
                Login
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-light logout-button"
                onClick={handleLogout}
                style={{ textDecoration: "none" }}
              >
                Logout
              </button> */}
              &nbsp;&nbsp;
              <div className="toggle-button">
                <ThemeContext.Consumer>
                  {({ changeTheme }) => (
                    <Thememode
                      toggleDark={() => {
                        setDarkMode(!darkMode);

                        changeTheme(darkMode ? themes.light : themes.dark);
                      }}
                    />
                  )}
                </ThemeContext.Consumer>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
