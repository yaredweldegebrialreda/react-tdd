import React from "react";

export const CustomForm = ({ original }) => {
  console.log(original);
  return (
    <div>
      <div>
        <form>
          <label htmlFor="firstName">First name</label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            value={original.firstName}
            readOnly
          />
          <input type="submit" value="Add" />
          {/* <button type="submit"></button> */}
        </form>
      </div>
    </div>
  );
};
