
export const initState = {
  totalPrice: 0,
  products: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "AddToBasket":
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    case "RemoveFromBasket":
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload.id),
      };
    case "UpdateQuantity":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ).filter((product) => product.quantity > 0), // Remove products with quantity 0
      };
    case "UpdatePrice":
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      throw new Error(`Unknown Problem.`);
  }
}