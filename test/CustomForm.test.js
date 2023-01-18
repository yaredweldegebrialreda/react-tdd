import React from "react";
import {
  initializeReactContainer,
  element,
  render,
  form,
  field,
  click,
  submitButton,
  change,
  labelFor,
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
  const itRendersAsATextBox = (fieldName) => {
    it("renders  as a text box.", () => {
      render(<CustomForm original={blankCustomer} />);

      expect(field(fieldName)).not.toBeNull();
      expect(field(fieldName).tagName).toEqual("INPUT");
      expect(field(fieldName).type).toEqual("text");
    });
  };
  const itIncludesTheExistingValue = (fieldName, existing) => {
    it("includes the existing value", () => {
      const customer = { [fieldName]: existing };
      render(<CustomForm original={customer} />);
      expect(field(fieldName).value).toEqual(existing);
    });
  };
  const itRendersLabelAndLabelContent = (fieldName, text) => {
    it("renders a label  for the text box ", () => {
      render(<CustomForm original={blankCustomer} />);
      expect(labelFor(fieldName)).not.toBeNull();
    });
    it(`renders '${text}' as the label content`, () => {
      render(<CustomForm original={blankCustomer} />);
      expect(labelFor(fieldName)).toContainText(text);
    });
  };
  const itAssignsAnIdThatMatchesTheLabelId = (fieldName, id) => {
    it("assigns an id that matches the label id to ", () => {
      render(<CustomForm original={blankCustomer} />);
      expect(field(fieldName).id).toEqual(id);
    });
  };
  const itSubmitsExistingValue = (fieldName, value) => {
    it("saves existing value when saved.", () => {
      expect.hasAssertions();
      const customer = { [fieldName]: value };
      render(
        <CustomForm
          original={customer}
          onSubmit={(data) => {
            expect(data[fieldName]).toEqual(value);
          }}
        />
      );
      click(submitButton());
    });
  };
  const itSubmitsNewValue = (fieldName, value) => {
    it("saves new value when submitted.", () => {
      expect.hasAssertions();
      render(
        <CustomForm
          original={blankCustomer}
          onSubmit={(data) => {
            expect(data[fieldName]).toEqual(value);
          }}
        />
      );
      change(field(fieldName), value);
      click(submitButton());
    });
  };

  describe("first name field", () => {
    itRendersAsATextBox("firstName");
    itIncludesTheExistingValue("firstName", "Ashley");
    itRendersLabelAndLabelContent("firstName", "First name");
    itAssignsAnIdThatMatchesTheLabelId("firstName", "firstName");
    it("renders a submit button", () => {
      render(<CustomForm original={blankCustomer} />);
      expect(submitButton()).not.toBeNull();
    });
    itSubmitsExistingValue("firstName", "Ashley");
    itSubmitsNewValue("firstName", "");
  });
});
