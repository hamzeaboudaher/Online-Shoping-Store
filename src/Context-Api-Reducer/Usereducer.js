export const initState = {
  totalPrice: 0,
  products: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'AddToBasket':
      return {
        ...state,
        products: [...state.products, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case 'RemoveFromBasket':
      const removedProduct = state.products.find((product) => product.id === action.payload);
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
        totalPrice: state.totalPrice - (removedProduct ? removedProduct.price : 0),
      };
    case 'UpdatePrice':
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      throw new Error(`Unknown Problem.`);
  }
};