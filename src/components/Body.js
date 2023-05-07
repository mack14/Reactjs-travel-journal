import React from "react";
import { RiMapPinLine } from "react-icons/ri";
const Body = (props) => {
  return (
    <div className="body">
      <div className="container">
        <div className="img-body">
          <img src={props.body.imageUrl} alt="" className="body--img" />
        </div>
        <div className="location">
          <div className="loca">
            <RiMapPinLine className="location-icon" />
            <h3>{props.body.location}</h3>
            <a className="location-url" href={props.body.googleMapsUrl}>
              View on google maps
            </a>
          </div>
          <h3 className="title">{props.body.title}</h3>
          <h4 className="date">
            {props.body.startDate} - {props.body.endDate}
          </h4>
          <p className="description">{props.body.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
