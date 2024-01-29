import React,{useState, useRef} from "react";
import JoditEditor from 'jodit-react';
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DropZone from "./DropZone";
import Stack from '@mui/material/Stack';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import Nav from "../CustomComponents/Nav";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'lift',
  color: theme.palette.text.secondary,
}));

export default () => {

  const editor = useRef(null);
	const [content, setContent] = useState('');


  const [warehouse, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
           <Sidebar />
           <main className="content">
            
          <Navbar />
          <Nav/>

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
          <h4 style={{marginBottom:"0"}}>Add Product</h4>
           <p style={{marginTop:"0"}}>Add new product in inventory</p>
          </div>
          <div  style={{marginLeft: 'auto'}}>
          
              <Link to="/"><HomeIcon/></Link>
             
          </div>
          
          </Stack>
          
      <form>
      <div style={{marginTop:"50px" , backgroundColor:"white"}}>
          <Box sx={{ flexGrow: 1,color:"#29b6f6" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item style={{marginBottom:"5px"}}>
          <TextField
          Title
          id="standard-required"
          label="Title"
          variant="standard" Width="50px"
          fullWidth
        />
       <br/>
       <br/>
          Description
           <JoditEditor
			ref={editor}
			value={content}
      tabIndex={1}
			onChange={newContent =>setContent(newContent)}
		/>
    </Item>
    <Item style={{marginBottom:"5px"}}>
    <b>Product Images</b>
         <DropZone/>
    </Item> 
        </Grid>
        <Grid item xs={3}>
          <Item style={{marginBottom:"5px"}}>
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Warehouse</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={warehouse}
          label="warehouse"
          onChange={handleChange}
        >
          <MenuItem value={10}>Warehouse 1</MenuItem>
          <MenuItem value={20}>Warehouse 2</MenuItem>
        </Select>
      </FormControl>
      <br/>
      <br/>
      <br/>
          <TextField
          SKU
          id="outlined-required"
          label="SKU"
          defaultValue="Enter product sku" fullWidth
        />
       <br/>
      <br/>
      <br/>
          <TextField
          Price
          id="outlined-required"
          label="Price*"
          defaultValue="Enter price" fullWidth
        />
       <br/>
      <br/>
      <br/>
          <TextField
          Purchase Price
          id="outlined-required"
          label="Purchase Price*"
          defaultValue="Enter Purchase price" fullWidth
        />
       <br/>
      <br/>
      <br/>
          <TextField
          Offer Price
          id="outlined-required"
          label="Offer Price"
          defaultValue="Enter Offer Price" fullWidth
        />
       <br/>
      <br/>
      <br/>
          <TextField
          Qty
          id="outlined-required"
          label="Qty*"
          defaultValue="Enter product Qty" fullWidth
        />
        <br/>
      <br/>
      <br/>
          <TextField
         Stock Alert
          id="outlined-required"
          label="Stock Alert*"
          defaultValue="Enter Stock Alert" fullWidth
        />
        </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <b>Select Categories</b> 
          <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="Electronics" />
      <FormControlLabel control={<Checkbox  />} label="Computers" />
      <FormControlLabel control={<Checkbox  />} label="Smart Home" />
      <FormControlLabel control={<Checkbox  />} label="Arts & Crafts" />
      <FormControlLabel control={<Checkbox  />} label="Fashion" />
      <FormControlLabel control={<Checkbox  />} label="Baby" />
      <FormControlLabel control={<Checkbox  />} label="Health & Care" />
      <FormControlLabel control={<Checkbox  />} label="Others" />
      <FormControlLabel control={<Checkbox  />} label="Mobile Accesories" />      
    </FormGroup>
   <b>Shiping</b> 
    <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="Free Shiping" />     
    </FormGroup>
     <br/>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tax Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={warehouse}
          label="warehouse"
          onChange={handleChange}
        >
          <MenuItem value={10}  defaultValue={Select}>Select</MenuItem>
          <MenuItem value={20}>Inclusive</MenuItem>
          <MenuItem value={20}>Exclusive</MenuItem>
        </Select>
      </FormControl>
      <br/>
      <br/>
      <TextField
         Product Tag
          id="outlined-required"
          label="Product Tag"
          defaultValue="" fullWidth
        />
          </Item>
        </Grid> 
        <Grid item xs={12}>
        <Button 
        variant="contained"
        fullWidth
        >Save</Button>
        </Grid>
      </Grid>
    </Box>
      </div>
      </form>

          <Footer  />
        </main>
    </>
  );
};
