import React from "react";
import ReactDOM from "react-dom/client";
import { AppointmentsDayView } from "./pages/AppointmentsDayView.jsx";
import AppointmentForm from "./components/AppointmentForm.jsx";
import { CustomForm } from "./components/CustomForm.jsx";
import { sampleAppointments } from "./utils/sampleData.js";
import Table from "./components/Table.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
const blankCustomer = {
  firstName: "",
};
// root.render(<Table />);
root.render(<AppointmentForm original={blankCustomer} />);
// root.render(<CustomForm original={blankCustomer} />);
//root.render(<AppointmentsDayView appointments={sampleAppointments} />);
