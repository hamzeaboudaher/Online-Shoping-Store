import { useContext } from "react"
import ShopData from "../Context-Api-Reducer/Context"


function Carts() {
const { products }=useContext(ShopData)

  return (
   <>

 {products.map((item) => (
  <li key={item.id}>
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