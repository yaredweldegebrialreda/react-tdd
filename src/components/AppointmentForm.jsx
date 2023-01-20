import React from "react";

const timeIncrements = (numTimes, startTime, increment) =>
  Array(numTimes)
    .fill([startTime])
    .reduce((acc, _, i) => acc.concat([startTime + i * increment]));

const dailyTimeSlots = (salonOpensAt, salonClosesAt) => {
  const totalSlots = (salonClosesAt - salonOpensAt) * 2;
  const startTime = new Date().setHours(salonOpensAt, 0, 0, 0);
  const increment = 30 * 60 * 1000;
  return timeIncrements(totalSlots, startTime, increment);
};

const toTimeValue = (timestamp) =>
  new Date(timestamp).toTimeString().substring(0, 5);

const weeklyDateValues = (startDate) => {
  const midnight = startDate.setHours(0, 0, 0, 0);
  const increment = 24 * 60 * 60 * 1000;
  return timeIncrements(7, midnight, increment);
};
const toShortDate = (timeStamp) => {
  const [day, , dayOfMonth] = new Date(timeStamp).toDateString().split(" ");

  return `${day} ${dayOfMonth}`;
};

const TimeSlotTable = ({ salonOpensAt, salonClosesAt, today }) => {
  const timeSlots = dailyTimeSlots(salonOpensAt, salonClosesAt);
  const dates = weeklyDateValues(today);
  // console.log(timeSlots.map((slot) => toTimeValue(slot)));
  // console.log(dates.map((date) => toShortDate(date)));
  return (
    <>
      <table id="time-slots">
        <thead>
          <tr>
            <th />
            {dates.map((date) => (
              <th key={date}>{toShortDate(date)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((timeSlot) => (
            <tr key={timeSlot}>
              <th>{toTimeValue(timeSlot)}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const AppointmentForm = ({
  selectableServices,
  original,
  salonOpensAt,
  salonClosesAt,
  today,
}) => {
  return (
    <div>
      AppointmentForm
      <form>
        <select name="service" value={original.service} readOnly>
          <option />
          {selectableServices?.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
        <TimeSlotTable
          salonClosesAt={salonClosesAt}
          salonOpensAt={salonOpensAt}
          today={today}
        />
      </form>
    </div>
  );
};
AppointmentForm.defaultProps = {
  salonOpensAt: 9,
  salonClosesAt: 19,
  today: new Date(),
  selectableServices: [
    "Cut",
    "Blow-dry",
    "Cut & color",
    "Beard trim",
    "Cut & beard trim",
    "Extensions",
  ],
};
export default AppointmentForm;
