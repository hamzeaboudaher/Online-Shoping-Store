<<<<<<< HEAD
import Footer from './footer/Footer'
import Headers from './Headers'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Headers/>
    <Footer/>
        <Outlet/>
        
=======
import Headers from "./Headers";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Headers />
      <Outlet />
>>>>>>> origin/usebranch
    </>
  );
}
export default Layout;
