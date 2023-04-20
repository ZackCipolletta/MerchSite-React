import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
  const { product, onDeleteProduct } = props;

  return (
    <React.Fragment>
      <h1>Product Detail</h1>
      <h3>{product.name} - {product.price}</h3>
      <p><img src={product.imgLink} /></p>
      <button onClick={() => props.onClickingEdit(product.id)}>Update Product</button>
      <button onClick={() => onDeleteProduct(product.id)}>Delete Product</button>
      <hr />
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onDeleteProduct: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ProductDetail;