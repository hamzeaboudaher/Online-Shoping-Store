import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Carts from './components/Carts'
import Products from './components/Products'
import Home from './components/Home'
import { initState, reducer } from './Context-Api-Reducer/Usereducer'
import { useEffect, useReducer, useState } from 'react'
import ShopData from './Context-Api-Reducer/Context'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respond) => respond.json())
      .then((dat) => setData(dat)).catch ((error)=> console.error("Error fetching data:", error));
   
  }, []);





const [state, dispatch]=useReducer(reducer, initState)

function addToBasket  (product)  {
  const updateBasket =[...state.products, product]
  updatePriceF(updateBasket)
  dispatch({ type: "AddToBasket", payload: updateBasket });
}



function removefromBasket(index)  {
  const updateBasket =[...state.products]
   updateBasket.splice(index, 1)
updatePriceF(updateBasket)
  dispatch({ type: "RemoveFromBasket", payload: updateBasket });
}

const updatePriceF=(updateBasket)=>{
  
  let totalPrice=updateBasket.reduce((acc, cu)=>{
    return acc +cu.price
  },0)
  dispatch({type:"UpdatePrice", payload:totalPrice})
}
const increaseCartQuantity = (id , updateBasket) => {
  
  const updatedProducts = state.products.map((product) =>
    product.id === id ? { ...state.products, quantity: product.quantity + 1 } : product
  );

  dispatch({ type: "Quantity", payload: updatedProducts });
  updatePriceF(updateBasket)
};


const values={
  data,
  addToBasket,
  removefromBasket,
  updatePriceF,
  increaseCartQuantity,
  quantity:state.quantity,
  products:state.products,
  totalPrice:state.totalPrice,

}

  const router=createBrowserRouter(createRoutesFromElements(
    
    <Route path='/' element={<Layout/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/carts' element={<Carts/>}/>
    <Route path='/products/:category?' element={<Products/>}/>
    </Route>
  ))
  return (
    <>
    
<ShopData.Provider value={values}>

<RouterProvider router={router}/>
</ShopData.Provider>


    </>
  )
}
export default App
