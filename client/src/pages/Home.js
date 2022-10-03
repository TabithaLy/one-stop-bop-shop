import '../index.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import React from 'react';
import GenreCards from '../components/GenreCards';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 700,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.2,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
      backgroundColor: "#00000099"
    }
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: '30%',
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(36% )',
  transition: theme.transitions.create('opacity'),
}));

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));




function Home() {
  const handleBannerClick = () => {
    window.location.assign('/vinyls')
  }

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      {/* Banner */}
      <Grid container>
        <Grid item xs={12} md={12}>
          <ImageButton
            focusRipple
            onClick = {()=>handleBannerClick()}
            key='banner'
            style={{
              width: '100%',
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(https://res.cloudinary.com/daheygjio/image/upload/v1664764481/albumcovers/6883469F-830F-48D0-A6D3-18360A281745_1_201_a_nsrctw.jpg)` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="h2"
                color="inherit"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                Shop Vinyls
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>

        </Grid>
      </Grid>
      {/* Close Banner */}

      {/* Genre Div */}
      <div>
        <Typography>
            <h2 align="center" sx={{fontFamily: 'monospace', fontWeight: 500}}> Shop by Genre </h2>
        </Typography>
      </div>
      <GenreCards/>
    </Box>
    </>
  );
}

export default Home;
