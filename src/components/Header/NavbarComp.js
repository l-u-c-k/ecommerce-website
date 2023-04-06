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

function NavbarComp({ isLogin, setLogin, cart, cartTotalQuantity }) {
  // const { cart, cartTotalQuantity } = useSelector((state) => state.productdata);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    setLogin(false);
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
                data-testid="myOrdersButton"
              >
                MyOrders
              </button>
              &nbsp;&nbsp;&nbsp;
              {!isLogin ? (
                <button
                  className="btn btn-light logout-button"
                  onClick={handleLogin}
                  style={{ textDecoration: "none" }}
                  data-testid="login-button"
                >
                  Login
                </button>
              ) : (
                <button
                  className="btn btn-light logout-button"
                  onClick={handleLogout}
                  style={{ textDecoration: "none" }}
                  data-testid="logout-button"
                >
                  Logout
                </button>
              )}
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
