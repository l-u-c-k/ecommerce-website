import React from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import './thememode.scss';
function Thememode(props) {
  return (
    <>
      <div className="wrapper">
        {/* <label className="switch">
          <input
            type="checkbox"
            id="checkbox-toggle"
            onClick={() => {
              props.toggleDark();
            }}
          />
        </label> */}
        <MDBSwitch
          id="flexSwitchCheckDefault"
          onClick={() => {
            props.toggleDark();
          }}
          className="thememode"
        />
      </div>
    </>
  );
}

export default Thememode;
