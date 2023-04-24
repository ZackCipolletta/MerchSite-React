import productListReducer from '../reducers/product-list-reducer';

describe('productListReducer', () => {

  const currentState = {
    '2123123-21312313-231': {
      name: 'Ryan & Aimen',
      price: 2,
      quantity: 3,
      imgLink: "",
      id: '2123123-21312313-231'
    }, '21asdf23-21312ff13-23d1': {
      name: 'Shoe',
      price: 5,
      quantity: 8,
      imgLink: "",
      id: '21asdf23-21312ff13-23d1'
    }
  };

  let action;
  const productData = {
    name: 'Ryan & Aimen',
    price: 2,
    quantity: 3,
    imgLink: "",
    id: '2123123-21312313-231'
  };

  test('Should return default state if there is no action type passed into the reducer',
    () => {
      expect(productListReducer({}, { type: null })).toEqual({});
    });

  test('Should successfully add new product data to mainProductList', () => {
    const { name, price, quantity, imgLink, id } = productData;
    action = {
      type: 'ADD_PRODUCT',
      name: name,
      price: price,
      quantity: quantity,
      imgLink: imgLink,
      id: id
    };

    expect(productListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        price: price,
        quantity: quantity,
        imgLink: imgLink,
        id: id
      }
    });
  });

  test('Should successfully delete a product', () => {
    action = {
      type: 'DELETE_PRODUCT',
      id: '2123123-21312313-231'
    };
    expect(productListReducer(currentState, action)).toEqual({
      '21asdf23-21312ff13-23d1': {
        name: 'Shoe',
        price: 5,
        quantity: 8,
        imgLink: "",
        id: '21asdf23-21312ff13-23d1'
      }
    });
  });







});