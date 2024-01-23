import Headers from './Headers'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Headers/>
        <Outlet/>
    </>
  )
}

export default Layout