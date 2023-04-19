import React from "react";
import PropTypes from "prop-types";

function Tile(props) {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <p><span> Price: ${props.price} </span><br />
        <span> Quantity in stock: {props.quantity}</span></p>
      <img src={props.imgLink} />
    </React.Fragment>
  );
  
}

Tile.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  imgLink: PropTypes.string
};

export default Tile;