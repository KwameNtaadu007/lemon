import React from "react";
import Button from "./Button";

const Confirmation = ({ handleConfirm, toggleConfirm, formData }) => {
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 my-4 py-2 border rounded shadow-sm">
          <h3 className="text-center">Form Details Confirmation</h3>
          <p className="text-center text-muted">Your reservation is one click away</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Reservation Date</strong>
              <span>{formData?.reservationDate}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Reservation Time</strong>
              <span>{formData?.reservationTime}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Number Of Guests</strong>
              <span>{formData?.guests}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <strong>Occasion</strong>
              <span>{formData?.occasion}</span>
            </li>
          </ul>
          <div className="d-flex justify-content-center mt-3 w-100">
          <button className={"btn btn-outline-secondary w-100 mr-1"} onClick={() => toggleConfirm()}>Edit Form</button>

            <button className={"btn btn-action w-100 ml-1"} onClick={()=>handleConfirm('submit')} >Confirm Reservation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
