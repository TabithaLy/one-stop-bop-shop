import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Auth from '../../utils/auth';

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
      <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <div>
            <Link className="text-light" to="/">
              <h1 className="m-0">Tech Thoughts</h1>
            </Link>
            <p className="m-0">Get into the mind of a programmer.</p>
          </div>
          <div>
            <Box sx={{ width: '100%' }}>
              <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <Tab label="Signup" href="/products" />
                <Tab label="Login" href="/logout" />
              </Tabs>
            </Box>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <div>
            <Link className="text-light" to="/">
              <h1 className="m-0">Tech Thoughts</h1>
            </Link>
            <p className="m-0">Get into the mind of a programmer.</p>
          </div>
          <div>
            <Box sx={{ width: '100%' }}>
              <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <Tab label="Signup" href="/signup" />
                <Tab label="Login" href="/login" />
              </Tabs>
            </Box>
          </div>
        </div>
      </header>
    );
  }
}
  export default Header;
