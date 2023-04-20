import React from "react";
import PropTypes from "prop-types";



function Tile(props) {

  function handleAddToCart(event) {
    event.preventDefault();
    props.onAddProductToCart(props.id);
  }

  function handleDelete(event) {
    event.preventDefault();
    props.onDeleteProduct(props.id);
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={handleAddToCart}>Buy</button>
        <button onClick={handleDelete}>Delete</button>
        <h4>{props.name}</h4>
        <p><span> Price: ${props.price} </span><br />
          <span id="quantity"> Quantity in stock: {props.quantity}</span></p>
        <img onClick={() => props.whenProductClicked(props.id)} src={props.imgLink} />
        <p> id: {props.id}</p>
      </div>
    </React.Fragment>
  );

}

Tile.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  imgLink: PropTypes.string,
  id: PropTypes.string,
  onNewProductCreation: PropTypes.func
};

export default Tile;