import React from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import "./thememode.scss";
function Thememode(props) {
  return (
    <>
      <div className="wrapper">
        <MDBSwitch
          id="flexSwitchCheckDefault"
          onClick={() => {
            props.toggleDark();
          }}
          className="thememode"
          data-testid="mdbSwitch"
        />
      </div>
    </>
  );
}

export default Thememode;
