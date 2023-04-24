import productListReducer from '../reducers/product-list-reducer';

describe('productListReducer', () => {
  

  test('Should return default state if there is no action type passed into the reducer',
    () => {
      expect(productListReducer({}, { type: null })).toEqual({});
    });
  
  
  
  
  
  
  
});