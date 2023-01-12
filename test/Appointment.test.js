import React from "react";
import ReactDOM from "react-dom/client";
import { Appointment } from "../src/pages/Appointment";
import { act } from "react-dom/test-utils";

describe("Appointment", () => {
  let container;
  let customer;
  beforeEach(() => {
    container = document.createElement("div");
    // appendChild creates shared state between tests, so it affect the next test, use replaceChildren instead.
    document.body.replaceChildren(container);
  });
  const render = (component) =>
    act(() => ReactDOM.createRoot(container).render(component));

  it("renders the customer first name", () => {
    customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />);
    // await new Promise(setTimeout);  // a way with out using act Nb: add async on about arroe function
    // using act
    // act(()=>ReactDom.createRoot(container).render(component))

    expect(document.body.textContent).toContain("Ashley");
  });
  it("renders the second customer's first name", () => {
    // triangulation :removal of hardcoding for component props
    customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain("Jordan");
  });
});
