// src/Navbar.js
import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';

const Navbar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // You can add logic here to handle the change event for each tab
  };

  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Contact" />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;
