function cartReducer(state, action) {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        items: [...state.items, action.product],
      };
    case "remove_from_cart":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      throw new Error("Unknown action type");
  }
}
const initialState = {
  items: [],
};

export default cartReducer;
