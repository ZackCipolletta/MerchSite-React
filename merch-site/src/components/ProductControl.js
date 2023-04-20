import React from "react";
import NewProductForm from "./NewProductForm";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import UpdateProductForm from "./UpdateProductForm";

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainProductList: [],
      editing: false
    };
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({
      mainProductList: newMainProductList,
      formVisibleOnPage: false
    });
  };

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.mainProductList.filter(product => product.id === id)[0];
    console.log("image clicked. id: " + id)
    console.log(selectedProduct)
    this.setState({ selectedProduct: selectedProduct });
  };

  handleEditingProductInList = (productToEdit) => {
    const editedMainProductList = this.state.mainProductList
      .filter(product => product.id !== this.state.selectedProduct.id)
      .concat(productToEdit);
    this.setState({
      mainProductList: editedMainProductList,
      editing: false,
      selectedProduct: null
    });
  };

  handleAddProductToCart = (id) => {

    const updatedProduct = this.state.mainProductList.find((obj) => obj.id === id);
    updatedProduct.quantity -= 1;

    const index = this.state.mainProductList.indexOf(updatedProduct);
    console.log("The index is: " + index);

    const updatedMainProductList = this.state.mainProductList.filter((obj) => obj.id !== id);
    updatedMainProductList.splice(index, 0, updatedProduct);

    this.setState({
      mainProductList: updatedMainProductList,
    });
  };

  handleDeleteProduct = (id) => {
    const updatedMainProductList = this.state.mainProductList.filter((obj) => obj.id !== id);
    this.setState({
      mainProductList: updatedMainProductList,
    });
  };


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <UpdateProductForm product={this.state.selectedProduct}
        onEditProduct={this.handleEditingProductInList}
        buttonText="Return to Product List" />;
    }
    else if (this.state.selectedProduct != null) {
      currentlyVisibleState =
        <ProductDetail product={this.state.selectedProduct}
          onDeleteProduct={this.handleDeleteProduct}
        onClickingEdit={this.handleEditClick} />
      buttonText ="Return to Product List";
    }
    else if (this.state.mainProductList.length === 0 || this.state.formVisibleOnPage) {
      currentlyVisibleState =
        <NewProductForm onNewProductCreation={this.handleAddingNewProductToList}
          product={this.state.selectedProduct}
          onClickingEdit={this.HandleEditClick} />;
      buttonText = "Return to Product List";
    } else {
      currentlyVisibleState = <ProductList productList={this.state.mainProductList}
        onProductSelection={this.handleChangingSelectedProduct}
        onAddProductToCart={this.handleAddProductToCart}
        onDeleteProduct={this.handleDeleteProduct} />;
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