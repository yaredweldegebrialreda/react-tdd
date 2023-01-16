import React from "react";
import { Appointment } from "../src/Appointment";
import { AppointmentsDayView } from "../src/AppointmentsDayView";
import {
  render,
  click,
  initializeReactContainer,
  element,
  elements,
  typesOf,
  textOf,
} from "./reactTestExtension";

describe("Appointment", () => {
  const blankCustomer = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };
  let customer;
  beforeEach(() => {
    initializeReactContainer();
  });
  const appointmentTable = () => element("#appointmentView > table");
  it("renders a table:", () => {
    render(<Appointment customer={blankCustomer} />);
    expect(document.body).not.toBeNull();
  });

  it("renders the customer first name", () => {
    customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />);
    expect(document.body).not.toBeNull();
    expect(document.body).toContainText("Ashley");
  });

  it("renders the second customer's first name", () => {
    const customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />);
    expect(document.body).toContainText("Jordan");
  });
});
describe("AppointmentDayView", () => {
  beforeEach(() => {
    initializeReactContainer();
  });
  const secondButton = () => elements("button")[1];
  const today = new Date();
  const twoAppointments = [
    { startsAt: today.setHours(12, 0), customer: { firstName: "Ashley" } },
    { startsAt: today.setHours(13, 0), customer: { firstName: "Jordan" } },
  ];

  it("renders a div with the right id.", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(element("div#appointmentsDayView")).not.toBeNull();
  });
  it("renders an ol element to display.", () => {
    render(<AppointmentsDayView appointments={[]} />);
    // const listElement = element("ol");
    expect(element("ol")).not.toBeNull();
  });
  it("renders a li for each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    const listChildren = elements("ol > li");
    expect(listChildren).toHaveLength(2);
  });
  it("renders the time of each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    const listChildren = elements("ol > li");
    // expect(listChildren[0]).toContainText("12:00");
    // expect(listChildren[1]).toContainText("13:00");
    expect(textOf(elements("li"))).toEqual(["12:00", "13:00"]);
  });
  it("initally shows a message saying there are no appointments today.", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(document.body).toContainText(
      "There are no appointments scheduled for today!"
    );
  });
  it("selects the first appointment by default:", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    expect(document.body).toContainText("Ashley");
  });
  it("has button element in each li", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    // const buttons = elements("li > button");
    // expect(buttons).toHaveLength(2);
    // expect(buttons[0].type).toEqual("button");
    expect(typesOf(elements("li > *"))).toEqual(["button", "button"]);
  });
  it("renders another appointment when selected.", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    // const button = elements("button")[0];
    click(secondButton());
    expect(document.body).toContainText("Jordan");
  });
});
