import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableProductForm from "./ReusableForm";

function ProductForm(props) {

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      imgLink: event.target.imgLink.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h1>Create New product here</h1>
      <ReusableProductForm
      formSubmissionHandler={handleNewProductFormSubmission}
      buttonText="Add New Product" />
    </React.Fragment>
  );
}

ProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default ProductForm;