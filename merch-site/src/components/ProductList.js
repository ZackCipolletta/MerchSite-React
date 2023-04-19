import React from "react";
import Tile from "./ProductTile";
import PropTypes from "prop-types";


// const tileList = [
//   {
//     name: "Headphones",
//     quantity: 5,
//     price: 99,
//     imgLink: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
//   },
//   {
//     name: "Shoe",
//     quantity: 11,
//     price: 139,
//     imgLink: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
//   },
//   {
//     name: "Watch",
//     quantity: 7,
//     price: 399,
//     imgLink: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
//   }
// ];

function ProductList(props) {
  return (
    <React.Fragment>
      {props.productList.map((product, index) =>
        <Tile price={product.price}
          quantity={product.quantity}
          imgLink={product.imgLink}
          name={product.name}
          key={index} />
      )}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array
};

export default ProductList;