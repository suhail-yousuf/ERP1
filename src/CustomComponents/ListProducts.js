import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DataGrid from "./DataGrid";
import Stack from '@mui/material/Stack';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';



export default () => {
  return (
    <>
        <Sidebar />
        <main className="content">
        <Navbar />
        <div>
        <Stack direction="row" spacing="2" sx={{ marginTop: "10px" }}>
            <HeadphonesIcon 
            sx={{
              width: 50,
              height: 50,
              borderRadius: 1,
              color:"white",
              bgcolor: 'primary.main',
            }}/>
           
            <div style={{marginLeft:"25px"}}>
          <h4 style={{marginBottom:"0"}}>Products</h4>
           <p style={{marginTop:"0"}}>View, delete and update products</p>
          </div>
          <div  style={{marginLeft: 'auto'}}>
          
              <Link to="/"><HomeIcon/></Link>
             
          </div>
          
          </Stack>
       <DataGrid/>
       </div>
      
        <Footer  />
        </main>
    </>
  );
};
