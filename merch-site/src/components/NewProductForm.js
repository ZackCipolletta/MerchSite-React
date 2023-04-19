import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

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
      <form onSubmit={handleNewProductFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Product Name' />
        <input
          type='number'
          name='price'
          placeholder='price' />
        <input
          type='number'
          name='quantity'
          placeholder='quantity' />
        <input
          type='text'
          name='imgLink'
          placeholder='Image Link' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

ProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default ProductForm;