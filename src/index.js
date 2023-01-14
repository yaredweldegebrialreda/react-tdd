import React from "react";
import ReactDOM from "react-dom/client";
import { AppointmentsDayView } from "./AppointmentsDayView.jsx";
import { sampleAppointments } from "./utils/sampleData.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppointmentsDayView appointments={sampleAppointments} />);
