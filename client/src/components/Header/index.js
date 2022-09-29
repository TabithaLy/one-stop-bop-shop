import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Auth from '../../utils/auth';
import './style.css';

const Header = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (Auth.loggedIn()) {
    return (
      <header className="bg-primary text-white mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <div>
            <Link className="text-light" to="/">
              <h1 className="m-0">Tech Thoughts</h1>
            </Link>
            <p className="m-0">Get into the mind of a programmer.</p>
          </div>
          <div className="tabColor">
            <Box sx={{ width: '100%' }}>
              <Tabs value={value} onChange={handleChange} aria-label="nav tabs" textColor="inherit" width="200" height="200">
                <Tab><img src="OneStopBopShop.jpeg" alt="logo"></img></Tab>
                <Tab className="tab" label="Signup" href="/products" />
                <Tab className="tab" label="Login" href="/logout" />
              </Tabs>
            </Box>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="bg-primary text-white mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <div>
            <h1 className="m-0">One Stop Bop Shop</h1>
            <p className="m-0">Let the record play!</p>
          </div>
          <div className="tabColor">
            <Box sx={{ width: '100%' }}>
              <Tabs value={value} onChange={handleChange} aria-label="nav tabs" textColor="inherit">
                <Tab><img src="OneStopBopShop.jpeg" alt="logo"></img></Tab>
                <Tab className="tab" label="Signup" href="/signup" />
                <Tab className="tab" label="Login" href="/login" />
              </Tabs>
            </Box>
          </div>
        </div>
      </header>
    );
  }
}
  export default Header;
