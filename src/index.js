import React from "react";
import ReactDOM from "react-dom/client";
import { AppointmentsDayView } from "./AppointmentsDayView.jsx";
import { CustomForm } from "./CustomForm.jsx";
import { sampleAppointments } from "./utils/sampleData.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
const blankCustomer = {
  firstName: "",
};
root.render(<CustomForm original={blankCustomer} />);
//root.render(<AppointmentsDayView appointments={sampleAppointments} />);
