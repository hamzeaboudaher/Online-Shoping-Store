import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements , Link} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Carts from './components/Carts'
import Products from './components/Products'
import Home from './components/Home'
import { initState, reducer } from './Context-Api-Reducer/Usereducer'
import { useEffect, useReducer, useState } from 'react'
import ShopData from './Context-Api-Reducer/Context'
function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respond) => respond.json())
      .then((dat) => setData(dat)).catch ((error)=> console.error("Error fetching data:", error));
   
  }, []);





const [state, dispatch]=useReducer(reducer, initState)

function addToBasket  (product)  {
  const updateBasket =[...state.products, product]

  dispatch({ type: "AddToBasket", payload: updateBasket });
}








const values={
  data,
  addToBasket,
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
<<<<<<< HEAD
      <ul>
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? { color: 'red' } : {})}>
            {({ isActive }) => (isActive ? 'Home' : 'Home')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">Cart</NavLink>
        </li>
      </ul>
      <HandleSearch products={products} setFilteredProducts={setFilteredProducts} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          index
          element={<Products products={filteredProducts} setShoppingCart={setShoppingCart} />}
        />
      </Routes>
=======
<ShopData.Provider value={values}>

<RouterProvider router={router}/>
</ShopData.Provider>
   
>>>>>>> main
    </>
  );
}
<<<<<<< HEAD

export default App;
=======
export default App
>>>>>>> main
