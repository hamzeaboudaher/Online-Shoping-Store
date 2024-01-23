import React from "react";
import "../App.css";
// Entfernen Sie ungenutzte Hooks, wenn Sie sie nicht verwenden
// import { useEffect, useState } from "react";
import Headers from "./Headers";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Headers />
      <Outlet />
    </>
    // <div className="bg-inherit" style={{}}>
    //   <h1 className="text-3xl font-bold underline bg-scroll">Hallo</h1>
    // </div>
  );
}

export default Layout;
