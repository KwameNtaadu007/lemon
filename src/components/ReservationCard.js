import React from 'react';

function ReservationCard(props) {
  return (
    <div className="card m-2" style={{ maxWidth: '18rem' }}>
      <div className="card-header bg-secondary text-white">
        <strong>Table #: {Number((props.reservation.id)).toFixed(1)}</strong>
      </div>
      <ul className="list-group list-group-flush">
     
        <li className="list-group-item">
          <small><strong>Reservation Date:</strong> <br/> {props.reservation.reservationDate}</small>
        </li>
        <li className="list-group-item">
        <small><strong>Reservation Time:</strong><br/> {props.reservation.reservationTime}</small>
        </li>
        <li className="list-group-item">
        <small><strong>Number of Guests:</strong><br/> {props.reservation.guests}</small>
        </li>
        <li className="list-group-item">
        <small> <strong>Occasion:</strong> <br/>{props.reservation.occasion}</small>
        </li>
      </ul>
    </div>
  );
}

export default ReservationCard;
