import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Thememode from "./thememode";

describe("renders thememode component", () => {
  const mockToggleDark = jest.fn();
  const props = {
    toggleDark: mockToggleDark,
  };
  it("rendering thememode", () => {
    const thememodeComp = render(
      <BrowserRouter>
        <Thememode {...props} />
      </BrowserRouter>
    );
    expect(thememodeComp).toBeTruthy();
  });

  it("calling toggledark button", () => {
    render(
      <BrowserRouter>
        <Thememode {...props} />
      </BrowserRouter>
    );
    const mdbswitch = screen.getByTestId("mdbSwitch");
    fireEvent.click(mdbswitch);

    expect(mockToggleDark).toHaveBeenCalled();
  });
});
