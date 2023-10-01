import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO",
      company: "ABC Inc.",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eu tempus viverra.",
    },
    {
      name: "Jane Smith",
      position: "Designer",
      company: "XYZ Design Studio",
      testimonial:
        "In non libero eget elit rutrum congue at eget dolor. Sed consectetur, quam id mattis bibendum.",
    },
    {
      name: "Jale Smith",
      position: "COO",
      company: "Daffodil Design Studio",
      testimonial:
        "In non libero eget elit rutrum congue at eget dolor. Sed consectetur, quam id mattis bibendum.",
    },
  ];

  return (
    <div className="container py-4">
      <div className="row p-2 mb-3 d-flex justify-content-center">
        <h1>Testimonials</h1>
      </div>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4" key={index}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
