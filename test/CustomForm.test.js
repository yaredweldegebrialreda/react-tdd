import React from "react";
import {
  initializeReactContainer,
  element,
  render,
  form,
  field,
} from "./reactTestExtension";
import { CustomForm } from "../src/CustomForm.jsx";

describe("Custom form", () => {
  const customer = { firstName: "Ashley" };
  const blankCustomer = {
    firstName: "",
  };
  beforeEach(() => {
    initializeReactContainer();
  });
  it("renders a form", () => {
    render(<CustomForm original={blankCustomer} />);
    expect(form()).not.toBeNull();
  });
  it("renders the first name field as a text box.", () => {
    render(<CustomForm original={blankCustomer} />);

    expect(field("firstName")).not.toBeNull();
    expect(field("firstName").tagName).toEqual("INPUT");
    expect(field("firstName").type).toEqual("text");
  });
  it("includes the existing value for the first name", () => {
    render(<CustomForm original={customer} />);

    expect(field("firstName").value).toEqual("Ashley");
  });
  it("renders a label for the first name field", () => {
    render(<CustomForm original={blankCustomer} />);
    const label = element("label[for=firstName]");
    expect(label).not.toBeNull();
  });
  it("renders 'First name' as the first name label content", () => {
    render(<CustomForm original={blankCustomer} />);
    const label = element("label[for=firstName]");
    expect(label).toContainText("First name");
  });
  it("assigns an id that matches the label id to the first name field", () => {
    render(<CustomForm original={blankCustomer} />);
    expect(field("firstName").id).toEqual("firstName");
  });
  it("renders a submt button", () => {
    render(<CustomForm original={blankCustomer} />);
    const button = element("input[type=submit]");
    expect(button).not.toBeNull();
  });
});
