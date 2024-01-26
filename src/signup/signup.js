import React, { useState } from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';

const SignUp = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  
  // Dummy time slots for the selected date
  const availableTimeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
  ];

  // Calculate the date 7 days from today
  const maxSelectableDate = new Date();
  maxSelectableDate.setDate(maxSelectableDate.getDate() + 7);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null); // Reset time slot when date changes
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  return (
    <div>
      <h2>Appointment Scheduler</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div>
          <label>Select Date:</label>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            minDate={new Date()} // Minimum selectable date is today
            maxDate={maxSelectableDate} // Maximum selectable date is 7 days from today
          />
        </div>

        {selectedDate && (
          <div>
            <label>Select Time Slot:</label>
            <div style={{ display: "flex", gap: "10px" }}>
              {availableTimeSlots.map((timeSlot) => (
                <button
                  key={timeSlot}
                  onClick={() => handleTimeSlotSelect(timeSlot)}
                  // disabled={/* Add logic to check availability */}
                  style={{
                    backgroundColor:
                      selectedTimeSlot === timeSlot ? "blue" : "white",
                    color: selectedTimeSlot === timeSlot ? "white" : "black",
                    border: "1px solid blue",
                    borderRadius: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  {timeSlot}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedDate && selectedTimeSlot && (
        <div>
          <h3>Selected Date and Time:</h3>
          <p>Date: {selectedDate.toDateString()}</p>
          <p>Time: {selectedTimeSlot}</p>
        </div>
      )}
    </div>
  );
};

export default SignUp;
