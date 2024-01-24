import { useContext } from "react"
import ShopData from "../Context-Api-Reducer/Context"


function Carts() {
const { products, removefromBasket,totalPrice }=useContext(ShopData)

  return (
   <>
  <h3>{totalPrice}</h3>
 {products.map((item ) => (
  <li key={item.id}>
  <button onClick={()=>{removefromBasket(item)}}>X</button>
  <h2>{item.price}</h2>
    <h1>{item.title}</h1>
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-32 object-cover mb-4 rounded-md"
    />
  </li>
))} 

        


   </>
  )
}

export default Carts