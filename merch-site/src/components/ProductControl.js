import React from "react";
import NewProductForm from "./NewProductForm";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import UpdateProductForm from "./UpdateProductForm";
import Cart from "./Cart";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      editing: false,
      cartList: [],
      cartVisible: false
    };
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleCartClick = () => {
    console.log("handleCartClick reached!" + this.state.cartList);
    console.log(this.state.cartList);
    this.setState({ cartVisible: true });
  };

  handleClick = () => {
    if (this.state.selectedProduct != null || this.state.cartVisible) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false,
        cartVisible: false
      });
    } else {
      console.log("handleClick function called");
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewProductToList = (newProduct) => {
    const { dispatch } = this.props;
    const { name, price, quantity, imgLink, id } = newProduct;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      price: price,
      quantity: quantity,
      imgLink: imgLink,
      id: id
    };
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  };

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.props.mainProductList[id];
    this.setState({ selectedProduct: selectedProduct });
  };

  handleEditingProductInList = (productToEdit) => {
    const { dispatch } = this.props;
    const { name, price, quantity, imgLink, id } = productToEdit;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      price: price,
      quantity: quantity,
      imgLink: imgLink,
      id: id
    };
    dispatch(action);
    this.setState({
      editing: false,
      selectedProduct: null
    });
  };

  handleAddProductToCart = (id) => {
    // if (this.state.cartVisible) {
    //   // const buyProduct = this.state.cartList.find((obj) => obj.id === id);
    //   const updatedCartList = this.state.cartList.filter((obj) => obj.id !== id);
    //   this.setState({
    //     cartList: updatedCartList
    //   });
    //   const updatedCartProduct = this.state.mainProductList.find((obj) => obj.id === id);
    //   const indexCart = this.state.cartList.indexOf(updatedCartProduct);
    //   console.log("The index is: " + indexCart);
    //   const updatedProduct = this.state.mainProductList.find((obj) => obj.id === id);
    //   updatedProduct.quantity -= 1;
    //   const index = this.state.mainProductList.indexOf(updatedProduct);
    //   console.log("The index is: " + index);
    //   const updatedMainProductList = this.state.mainProductList.filter((obj) => obj.id !== id);
    //   updatedMainProductList.splice(index, 0, updatedProduct);
    //   this.setState({
    //     mainProductList: updatedMainProductList,
    //     cartVisible: false
    //   });

    // } else {
    const cartProduct = this.state.mainProductList.find((obj) => obj.id === id);
    const newCartList = this.state.cartList;
    newCartList.push(cartProduct);
    this.setState({
      cartList: newCartList,
    });
    // }
  };

  handleDeleteProduct = (id) => {
    const { dispatch } = this.props;
    if (this.state.cartVisible) {
      const updatedCartList = this.state.cartList.filter((obj) => obj.id !== id);
      this.setState({
        cartList: updatedCartList
      });
    } else {
      const action = {
        type: 'DELETE_PRODUCT',
        id: id
      };
      dispatch(action);
      this.setState({
        selectedProduct: null
      });
    };
  };


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <UpdateProductForm product={this.state.selectedProduct}
        onEditProduct={this.handleEditingProductInList} />;
      buttonText = "Return to Product List";
    }
    else if (this.state.cartVisible) {
      currentlyVisibleState = <Cart cartList={this.state.cartList}
        onDeleteProduct={this.handleDeleteProduct}
        onAddProductToCart={this.handleAddProductToCart}
      />;
      buttonText = "Return to Product List";
    }
    else if (this.state.selectedProduct != null) {
      currentlyVisibleState =
        <ProductDetail product={this.state.selectedProduct}
          onDeleteProduct={this.handleDeleteProduct}
          onClickingEdit={this.handleEditClick} />;
      buttonText = "Return to Product List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState =
        <NewProductForm onNewProductCreation={this.handleAddingNewProductToList}
        // product={this.props.selectedProduct}
        // onClickingEdit={this.HandleEditClick}
        />;
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = <ProductList productList={this.props.mainProductList}
        onProductSelection={this.handleChangingSelectedProduct}
        onAddProductToCart={this.handleAddProductToCart}
        onDeleteProduct={this.handleDeleteProduct}
        onShowCart={this.handleCartClick} />;
      buttonText = "Add Product";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

ProductControl.propTypes = {
  mainProductList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainProductList: state
  };
};

ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl;




  // handleAddProductToCart = (id) => {

  //   const updatedProduct = this.state.mainProductList.find((obj) => obj.id === id);
  //   updatedProduct.quantity -= 1;

  //   const index = this.state.mainProductList.indexOf(updatedProduct);
  //   console.log("The index is: " + index);

  //   const updatedMainProductList = this.state.mainProductList.filter((obj) => obj.id !== id);
  //   updatedMainProductList.splice(index, 0, updatedProduct);

  //   this.setState({
  //     mainProductList: updatedMainProductList,
  //   });
  // };