import React from "react";

const Table = () => {
  return (
    <div>
      <table id="time-slots">
        <thead>
          <tr>
            <th></th>
            <th>oct1</th>
            <th>oct2</th>
            <th>oct3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <tr>
              <th>9:00</th>
              <td>
                <input type="option" name="timeSlot" value="..." />
              </td>
            </tr>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
