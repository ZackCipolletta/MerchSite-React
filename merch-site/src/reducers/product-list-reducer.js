const reducer = (state = {}, action) => {
  const { name, price, quantity, imgLink, id } = action;
  switch (action.type) {
    case 'ADD_PRODUCT':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          quantity: quantity,
          imgLink: imgLink,
          id: id
        }
      });
    case 'DELETE_PRODUCT':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;