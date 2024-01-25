import Footer from './footer/Footer'
import Headers from './Headers'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Headers/>
    <Footer/>
        <Outlet/>
        
    </>
  )
}

export default Layout