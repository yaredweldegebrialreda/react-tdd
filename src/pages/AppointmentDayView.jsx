import React from "react";

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments?.map((appointment) => (
        <li key={appointment.startsAt} />
      ))}
    </ol>
  </div>
);
