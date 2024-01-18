import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Carts from './components/Carts'
import Products from './components/Products'

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/carts' element={<Carts/>}/>
      <Route path='/products' element={<Products/>}/>
    </Route>
  ))
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}
export default App
