import React from "react";
import ReactDom from "react-dom/client";
import { Appointment } from "../src/Appointment";
import { act } from "react-dom/test-utils";

describe("Appointment", () => {
  let container;
  let customer;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });
  const render = (component) =>
    act(() => ReactDom.createRoot(container).render(component));

  it("renders customer's name", () => {
    customer = { firstName: "yared" };
    render(<Appointment customer={customer} />);
    // await new Promise(setTimeout);
    expect(container.textContent).toContain("yared");
  });
  it("renders second customer's name", () => {
    customer = { firstName: "shemsu" };
    render(<Appointment customer={customer} />);
    expect(container.textContent).toContain("shemsu");
  });
});

// triangulation :removal of hardcoding for component props
// notes
// await new Promise(setTimeout);  // a way with out using act Nb: add async on about arroe function
// using act
// act(()=>ReactDom.createRoot(container).render(component))
