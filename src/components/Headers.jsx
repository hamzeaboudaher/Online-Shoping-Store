import { Link } from 'react-router-dom'

function Headers() {
  return (
   <>
    <nav>
        <ul>
        <li> <Link to="/">Home</Link></li>
           
        </ul>
        <ul>
        <li> <Link  to="/carts">Carts</Link></li>
           
        </ul>
        <ul>
           <li> <Link to="/products">Products</Link></li>
        </ul>
    </nav>
   </>
  )
}

export default Headers