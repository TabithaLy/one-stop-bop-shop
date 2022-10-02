import '../index.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import Banner from "../assets/images/banner.png";
import Auth from "../utils/auth";
import React from 'react';
import GenreCards from '../components/GenreCards';


function Home() {

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      {/* Banner */}
      <Grid container>
        <Grid item xs={12} md={12}>
          <img className="banner" src={Banner} alt="store banner"/>
        </Grid>
      </Grid>
      {/* Close Banner */}

      {/* Genre Div */}
      <div>
        <Typography>
            <h2 align="center"> Shop by Genre </h2>
        </Typography>
      </div>
      <GenreCards/>
    </Box>
    </>
  );
}

export default Home;
