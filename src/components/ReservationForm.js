import React, { useState, useReducer } from "react";
import { reducer, initializeTimes } from '../reducer';


function ReservationForm({handleConfirm}) {
 
  const triggerInitialize = initializeTimes();
  const [availableTimes, dispatch] = useReducer(reducer, triggerInitialize);

  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};

    if (!reservationDate) {
      validationErrors.reservationDate = "Please choose a date.";
    }

    if (!reservationTime) {
      validationErrors.reservationTime = "Please choose a time.";
    }

    if (!guests || guests < 1 || guests > 10) {
      validationErrors.guests = "Number of guests must be between 1 and 10.";
    }

    if (!occasion) {
      validationErrors.occasion = "Please select an occasion.";
    }

    return validationErrors;
  };

  const handleDateChange = (e) => {
    const newSelectedDate = e.target.value;
    dispatch({ type: "updateTimes", payload: { selectedDate: newSelectedDate } });
    setReservationDate(newSelectedDate);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const formData = { reservationDate, reservationTime, guests, occasion };
    handleConfirm('confirm',formData);
    try {
     
    } catch (error) {
      console.error("API submission error:", error);
      // Handle any submission errors here
    }
  };

  return (
    <div className="d-flex justify-content-center">
       
       <form onSubmit={handleSubmit} className="col-12 col-md-6 col-lg-4 my-4 py-2" >
       <h3>Reservation Form</h3>
        <p>While we are committed to giving you the best experience, table availability is based on Date and time.</p>
      <div className="form-group">
        <label htmlFor="resDate">Choose date</label>
        <input
          type="date"
          id="resDate"
          className={`form-control ${errors.reservationDate ? "is-invalid" : ""}`}
          value={reservationDate}
          onChange={(e) => handleDateChange(e)}
          aria-label="Reservation date"
        />
        {errors.reservationDate && (
          <div className="invalid-feedback">{errors.reservationDate}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="resTime">Choose time</label>
        <select
          id="resTime"
          className={`form-control ${errors.reservationTime ? "is-invalid" : ""}`}
          value={reservationTime}
          onChange={(e) => setReservationTime(e.target.value)}
          aria-label="Reservation time"
        >
          {availableTimes?.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.reservationTime && (
          <div className="invalid-feedback">{errors.reservationTime}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          className={`form-control ${errors.guests ? "is-invalid" : ""}`}
          type="number"
          placeholder={1}
          min={1}
          max={10}
          id="guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          aria-label="Number of guests"
        />
        {errors.guests && (
          <div className="invalid-feedback">{errors.guests}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select 
          id="occasion"
          className={`form-control ${errors.occasion ? "is-invalid" : ""}  ${occasion&&'selected'}`}
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-label="Occasion"
        >
          <option value="">Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && (
          <div className="invalid-feedback">{errors.occasion}</div>
        )}
      </div>

      <div className="d-flex justify-content-center">
      <input
        className="btn btn-outline-secondary w-100 mr-1"
        type="reset"
        value="Reset"
        aria-label="Submit reservation request"
      />
      <input
        className="btn btn-action w-100 ml-1 "
        type="submit"
        value="Make Your Reservation"
        aria-label="Submit reservation request"
      />
      </div>
    </form>
    </div>
  );
}

export default ReservationForm;
