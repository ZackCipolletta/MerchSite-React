import React from "react";
import NewProductForm from "./NewProductForm";
import ProductList from "./ProductList";

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  };

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({
      mainProductList: newMainProductList,
      formVisibleOnPage: false
    });
  };

  handleAddProductToCart = (id) => {
    
    const updatedProduct = this.state.mainProductList.find((obj) => obj.id === id);
    updatedProduct.quantity -= 1;

    const index = this.state.mainProductList.indexOf(updatedProduct);
    console.log("The index is: " + index)

    const updatedMainProductList = this.state.mainProductList.filter((obj) => obj.id !== id);
    updatedMainProductList.splice( index, 0, updatedProduct)

    this.setState({
      mainProductList: updatedMainProductList,
    })
  };

  handleDeleteProduct = (id) => {
    const updatedMainProductList = this.state.mainProductList.filter((obj) => obj.id !== id);
    this.setState({
      mainProductList: updatedMainProductList,
    })
  };


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.mainProductList.length === 0 || this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProductToList} />;
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = <ProductList productList={this.state.mainProductList} onAddProductToCart={this.handleAddProductToCart} onDeleteProduct={this.handleDeleteProduct} />;
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

export default ProductControl;