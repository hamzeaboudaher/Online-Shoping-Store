export const initState = {
  totalPrice: 0,
  products: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "AddToBasket":
      return {
        ...state,
        products: action.payload,
      };
    case "RemoveFromBasket":
      return {
        ...state,
        products: action.payload,
      };
    case "UpdatePrice":
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      throw new Error(`Unknown Problem.`);
  }
};
