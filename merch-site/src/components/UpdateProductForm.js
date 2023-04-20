import React from "react";
import PropTypes from "prop-types";
import ReusableProductForm from "./ReusableForm";

function UpdateProductForm(props) {
  const { product } = props;

  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      imgLink: event.target.imgLink.value,
      id: product.id
    });
  }

  return (
    <React.Fragment>
      <ReusableProductForm
        formSubmissionHandler={handleEditProductFormSubmission}
        buttonText="Update product" />
    </React.Fragment>
  );
}

export default UpdateProductForm;

UpdateProductForm.propTypes = {
  product: PropTypes.object,
  onEditProduct: PropTypes.func
};