import React, { useState } from "react";
import { Appointment } from "./Appointment.jsx";

const appointmentTimeOfTheDay = (startAt) => {
  const [h, m] = new Date(startAt).toTimeString(startAt).split(":");
  return `${h}:${m}`;
};

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments?.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfTheDay(appointment.startsAt)}
            </button>
          </li>
        ))}
      </ol>

      {!appointments.length ? (
        <span>There are no appointments scheduled for today!</span>
      ) : (
        <Appointment {...appointments[selectedAppointment]} />
      )}
    </div>
  );
};
