import React from "react";
import Tile from "./ProductTile";
import PropTypes from "prop-types";


function Cart(props) {
  return (
    <React.Fragment>
      {props.cartList.map((product) =>
        <Tile
          price={product.price}
          imgLink={product.imgLink}
          name={product.name}
          id={product.id}
          key={product.id}
          onDeleteProduct={props.onDeleteProduct}
          onAddProductToCart={props.onAddProductToCart}
        />
      )}
    </React.Fragment>
  );
}

Cart.propTypes = {
  cartList: PropTypes.array
};

export default Cart;