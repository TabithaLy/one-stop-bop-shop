import '../index.css';
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import Banner from "../assets/images/banner.png";
import GenreOne from "../assets/images/genre-one.png";
import Auth from "../utils/auth";


function Home() {
  return (
    <>
    {Auth.loggedIn() ? (
      <h1>logged in</h1>
    ) :
    null}
    <Box sx={{ flexGrow: 1 }}>
      {/* Banner */}
      <Grid container>
        <Grid item xs={12} md={12}>
          <img className="banner" src={Banner} alt="store banner" />
        </Grid>
      </Grid>
      {/* Close Banner */}

      {/* Genre Div */}
      <div>
        <Typography>
            <h2 align="center"> Shop by Genre </h2>
        </Typography>
      </div>

      {/* Genre Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <img className="genre" src={GenreOne} alt="#"/>
        </Grid>
        <Grid item xs={12} md={3}>
        <img className="genre" src={GenreOne} alt="#"/>          
        </Grid>
        <Grid item xs={12} md={3}>
        <img className="genre" src={GenreOne} alt="#"/>
        </Grid>
        <Grid item xs={12} md={3}>
        <img className="genre" src={GenreOne} alt="#"/>
        </Grid>
        {/* Close Genre Cards */}
      </Grid>
    </Box>
    </>
  );
}

export default Home;
