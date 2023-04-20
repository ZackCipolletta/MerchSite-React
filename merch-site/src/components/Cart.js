import React from "react";
import Tile from "./ProductTile";
import PropTypes from "prop-types";


function Cart(props) {
  return (
    <React.Fragment>
      {props.cartList.map((product) =>
        <Tile
          price={product.price}
          quantity={product.quantity}
          imgLink={product.imgLink}
          name={product.name}
          id={product.id}
          key={product.id}
        />
      )}
    </React.Fragment>
  );
}

Cart.propTypes = {
  cartList: PropTypes.array
};

export default Cart;