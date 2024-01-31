import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Carts from "./components/Carts";
import Products from "./components/Products";
import Home from "./components/Home";
import { initState, reducer } from "./Context-Api-Reducer/Usereducer";
import { useEffect, useReducer, useState } from "react";
import ShopData from "./Context-Api-Reducer/Context";
import Login from "./Login/Login";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respond) => respond.json())
      .then((dat) => setData(dat))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [state, dispatch] = useReducer(reducer, initState);
  const addToBasket = (product) => {
    const existingProductIndex = state.products.findIndex(
      (p) => p.id === product.id
    );
    if (existingProductIndex !== -1) {
      const updatedProducts = [...state.products];
      updatedProducts[existingProductIndex].quantity += 1;
      updatePriceF(updatedProducts);
      dispatch({
        type: "UpdateQuantity",
        payload: {
          id: product.id,
          quantity: updatedProducts[existingProductIndex].quantity,
        },
      });
    } else {
      dispatch({ type: "AddToBasket", payload: { ...product, quantity: 1 } });
      updatePriceF([...state.products, { ...product, quantity: 1 }]);
    }
  };
  const updateQuantity = (product, newQuantity) => {
    const updatedProducts = state.products.map((p) =>
      p.id === product.id ? { ...p, quantity: newQuantity } : p
    );
    updatePriceF(updatedProducts);
    dispatch({
      type: "UpdateQuantity",
      payload: { id: product.id, quantity: newQuantity },
    });
  };
  function removefromBasket(index) {
    const updateBasket = [...state.products];
    updateBasket.splice(index, 1);
    updatePriceF(updateBasket);
    dispatch({ type: "RemoveFromBasket", payload: updateBasket });
  }
  const updatePriceF = (updateBasket) => {
    let totalPrice = updateBasket.reduce((acc, cu) => {
      return acc + cu.price * cu.quantity;
    }, 0);
    dispatch({ type: "UpdatePrice", payload: totalPrice });
  };

  console.log(data)
  const values = {
    data,
    addToBasket,
    updateQuantity,
    removefromBasket,
    updatePriceF,
    products: state.products,
    totalPrice: state.totalPrice,
  };



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/products/:categoryid?" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );
  return (
    <>
      <ShopData.Provider value={values}>
        <RouterProvider router={router} />
      </ShopData.Provider>
    </>
  );
}
export default App;
