export const initState = {
  totalPrice: 0,
  products: [],
  quantity:0
};

export const reducer=((state,action)=>{
  switch(action.type){
    case "AddToBasket":
      return{
        ...state, products: action.payload
      }
      case "RemoveFromBasket":
      return{
        ...state, products: action.payload
      }
      case "UpdatePrice":
        return{
          ...state, totalPrice: action.payload
        }
        case "Quantity":
          return{
            ...state,
            quantity: action.payload +1
          }
        default:
          throw new Error(`Unknown Problem.`);
  }
  })