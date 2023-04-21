import React from "react";
import PropTypes from "prop-types";

function ReusableProductForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableProductForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableProductForm;