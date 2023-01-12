import React from "react";

export const Appointment = ({ customer }) => {
  console.log("Inside", customer);
  return <div>{customer.firstName}</div>;
};

// export const Appointment = () => "Ashley";
