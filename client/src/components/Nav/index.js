// import React, { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

// function LinkTab(props) {
//   return (
    
//     <Link component="a" to={props.href}> 
//     <Tab>

//     {props.label}
//     </Tab>
//     </Link>
//   );
// }

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (Auth.loggedIn()) {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab label="Signup" href="/products" />
        <Tab label="Login" href="/logout" />
      </Tabs>
    </Box>
  );
  } else {
    return (
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <Tab label="Signup" href="/signup" />
          <Tab label="Login" href="/login" />
        </Tabs>
      </Box>
    );
  }
}