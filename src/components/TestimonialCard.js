import React from 'react';

const TestimonialCard = ({ name, position, company, testimonial }) => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{testimonial}</p>
      </div>
      <div className="card-footer">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{position}</p>
        <p className="card-text">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
