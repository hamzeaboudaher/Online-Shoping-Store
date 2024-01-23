import {  NavLink } from 'react-router-dom'

function Headers() {
  return (
   <>
<div className="flex justify-center">
<nav className='text-xl font-bold text-black border-2 w-96 border-black border-hidden h-9 flex justify-center items-center gap-8'>
        <ul>
        <li> <NavLink className={({isActive})=>`${isActive ? "text-blue-900": "text-blue-400"}`} to="/home">Home</NavLink></li>
           
        </ul>
        <ul>
        <li> <NavLink className={({isActive})=>`${isActive ? "text-blue-900": "text-blue-400"}`} to="/carts">Carts</NavLink></li>
           
        </ul>
        <ul>
           <li> <NavLink className={({isActive})=>`${isActive ? "text-blue-900": "text-blue-400"}`} to="/products">products</NavLink></li>
        </ul>
    </nav>
</div>

   </>
  )
}

export default Headers