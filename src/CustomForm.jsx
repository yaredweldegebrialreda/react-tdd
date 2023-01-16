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
          <input type="submit" value="Add" />
          {/* <button type="submit"></button> */}
        </form>
      </div>
    </div>
  );
};
