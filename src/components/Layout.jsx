import Headers from "./Headers";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
function Layout() {
  return (
    <>
      <Headers />
      
      <Footer/>
      
      <Outlet />
    </>
  );
}
export default Layout;
