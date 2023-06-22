import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
export default function Layout() {
    return (// in layout spun cum vrem sa arate site-ul, in ce ordine
        <>
          <NavBar />
          
          <Outlet /> 
          {/* are rolul de a aparea si a disparea informatia dinamic */}
          {/* Outlet renders the current route selected. */}
         <Footer />
        </>
      )
}