import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Grid} from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function ImageAvatars() {
  return (
    
        <Stack direction="row" spacing={50}>
        <Avatar alt="Nathan Soum" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Tabitha Spencer-Salmon" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Chase Stratton" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Emily Rose" src="/static/images/avatar/4.jpg" />
      </Stack>

    );
}


export default function Curators() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={2} margin = {5}>

            <h1>Curators</h1>
            <ImageAvatars />
        </Stack>
        <Container>
        <Grid container spacing={4} margin= {2}  >
        <Typography variant="h6" gutterBottom component="div">
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>    
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </Typography>
            </Grid>
            </Container>
        <Stack direction="row" spacing={40} indent = {10} margin = {15} >
            <Typography variant="h6" gutterBottom component="div">
        Nathan Soum
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
        Tabitha Spencer-Salmon
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
        Chase Stratton
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
        Emily Rose
        </Typography>
        </Stack>
     
        </Box>
        </div>
    )
}
