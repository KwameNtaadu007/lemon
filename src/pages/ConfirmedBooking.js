import React from "react";
import { Link, useParams } from "react-router-dom";

export default function ConfirmedBooking() {
  const {id} = useParams()
  return (
    <div className="container m-4 p-4 d-flex justify-content-center align-items-center">
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">Congratulations</h5>
          <p className="card-text">
            Your reservation has been confirmed successfully. 
            Your table number is <strong>{id}</strong>. <br/>
            Click the button below
            to proceed to the reservations page.
          </p>
          <Link to="/reservations" className="btn btn-secondary">
            View Reservations
          </Link>
        </div>
      </div>
    </div>
  );
}
