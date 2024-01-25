import { useContext } from "react"
import ShopData from "../Context-Api-Reducer/Context"


function Carts() {
const { products,dispatch, removefromBasket,totalPrice,  }=useContext(ShopData)

  return (
   <>
  <h3>Total Price: <span className="text-red-800">{totalPrice } €€</span></h3>



  {products.map((item ) => (
  <div key={item.id} className=" border-solid border-2 w-96 flex flex-row justify-center h-36 gap-4 mt-8 relative left-1/3">  
 

  <div>  <img 
      src={item.image}
      alt={item.title}
      className="border-hidden border-2 h-32 object-cover mb-4 rounded-md mt-2"
    /></div>
    
    <div className="border-hidden border-2 list-none">
  <ul>
    <li>
    <h1>{item.title}</h1>

    <input type="number" id="quantity" name="quantity"  value={item.qty} onChange={(e) => dispatch({ type: "Quantity", payload: {id:item.id, qty:e.target.value} })}></input>
          
     
    </li>
  </ul>
</div>

    
    <div className="border-hidden border-2">  <button  onClick={()=>{removefromBasket(item)}}>X</button>
</div>
 
  
  </div>

))} 

        


   </>
  )
}
export default Carts;
