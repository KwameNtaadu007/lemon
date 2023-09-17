import React from "react";

const ImageCard = ({image,title,itemPrice,bodyText,footerText}) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <span className="d-flex justify-content-between">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title card-price">{itemPrice}</h5>
        </span>
        <p className="card-text">
          {bodyText}
        </p>
        <h6>{footerText}</h6>
      </div>
    </div>
  );
};

export default ImageCard;


