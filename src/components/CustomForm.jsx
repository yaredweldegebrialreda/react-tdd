import React, { useState } from "react";

export const CustomForm = ({ original, onSubmit }) => {
  const [customer, setCustomer] = useState(original);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(original);
  };

  const handleInputChange = ({ target }) =>
    setCustomer((customer) => ({
      ...customer,
      [target.name]: target.value,
    }));
  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="firstName">First name</label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            value={customer.firstName}
            onChange={handleInputChange}
          />
          <label htmlFor="lastName">Last name</label>
          <input
            name="lastName"
            id="lastName"
            type="text"
            value={customer.lastName}
            onChange={handleInputChange}
          />
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            name="phoneNumber"
            id="phoneNumber"
            type="text"
            value={customer.phoneNumber}
            onChange={handleInputChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};
