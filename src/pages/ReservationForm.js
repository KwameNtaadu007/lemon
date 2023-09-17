import React, { useState } from "react";
import { Navigate } from 'react-router-dom'
// Import the submitAPI function from the appropriate module


function ReservationForm({ dispatch,availableTimes }) {
  // Define state variables for each input field
  const [resDate, setResDate] = useState(""); // Date input
  const [resTime, setResTime] = useState("17:00"); // Time input
  const [guests, setGuests] = useState(1); // Number of guests input
  const [occasion, setOccasion] = useState("Birthday"); // Occasion input

  const handleDateChange = (e) => {
    const newSelectedDate = e.target.value;
    dispatch({ type: "updateTimes", payload: { selectedDate: newSelectedDate } });
    setResDate(newSelectedDate); // Assuming you have a state for the selectedDate
  };

  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // You can access the form values using the state variables here
    console.log("Date:", resDate);
    console.log("Time:", resTime);
    console.log("Number of Guests:", guests);
    console.log("Occasion:", occasion);
    console.log(window.submitAPI)
    const formData = { resDate, resTime, guests, occasion };
    
    // Assuming submitAPI is an asynchronous function that returns a promise
    try {

      if (window.submitAPI) {
        // Call the submitAPI function
        const result = await window.submitAPI(formData);
        // Handle the result as needed
        if (result) {
          // Use conditional rendering to navigate upon success
          return <Navigate replace to="/confirmed" />;
        }
    }
    
    
    } catch (error) {
      console.error("API submission error:", error);
      // Handle any submission errors here
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="w-100">
      <h1>Book Now</h1>
      <div className="form-group">
        <label htmlFor="resDate">Choose date</label>
        <input
          type="date"
          id="resDate"
          className="form-control"
          value={resDate}
          onChange={(e) => handleDateChange(e)}
          aria-label="Reservation date"
        />
      </div>

      <div className="form-group">
        <label htmlFor="resTime">Choose time</label>
        <select
          id="resTime"
          className="form-control"
          value={resTime}
          onChange={(e) => setResTime(e.target.value)}
          aria-label="Reservation time"
        >
          {availableTimes?.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          className="form-control"
          type="number"
          placeholder={1}
          min={1}
          max={10}
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          aria-label="Number of guests"
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          className="form-control"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-label="Occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <input
        className="btn btn-secondary w-100"
        type="submit"
        value="Make Your Reservation"
        aria-label="Submit reservation request"
      />
    </form>
  );
}

export default ReservationForm;
