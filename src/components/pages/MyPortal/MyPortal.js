import React from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal-root");

function MyPortal(props) {
  return ReactDOM.createPortal(props.children, portalRoot);
}

export default MyPortal;
