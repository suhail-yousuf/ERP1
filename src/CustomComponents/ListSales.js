import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default () => {
  return (
    <>
        <Sidebar />
        <main className="content">
        <Navbar />
        
        <div>
        ListSales
       </div>
      
        <Footer  />
        </main>
    </>
  );
};
