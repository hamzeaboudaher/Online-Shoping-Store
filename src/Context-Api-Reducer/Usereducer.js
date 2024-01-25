export const initState = {
  totalPrice: 0,
  products: [],
 
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
            products: state.products.filter((c)=>c.id===action.payload.id ? (c.qty=action.payload.qty ) : c.qty)
          }
        default:
          throw new Error(`Unknown Problem.`);
  }
  })