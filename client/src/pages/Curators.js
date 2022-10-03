
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Grid } from "@mui/material";



const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.Box}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
  
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));



  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.Box}`,
  }));



  function ImageAvatars() {
    return (
      <Stack direction="auto" spacing={50}>
        <Avatar alt="Nathan Soum" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Tabitha Spencer-Salmon" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Chase Stratton" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Emily Rose" src="/static/images/avatar/4.jpg" />
      </Stack>
    );
  }

// below is the start of the Curators page that includes the Curators component and the Curators component is the one that has the avatars and the badges and the github icons and the names of the curators and the description of the curators and iframe that shows the github profile of the curators.
// iframe is used to show the curators playlist on the page.

// github icon is used to link to the curators github profile but it is not working yet. 

  // curators page 
  export default function Curators() {
    return (
      <div>
        <Container sx={{m:5}} justify="center" align="center">
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Our Curators!
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            We are a group of music lovers who have a passion for vinyl records.
            We have a wide range of music tastes and we are always looking for new
            music to listen to. We are here to help you find the perfect record
            for you.
          </Typography>
          <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item xs={12} sm={7} md={5}>
              <Box
                sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Nathan Soum
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Nathan is a music lover who has a passion for vinyl records. He
                  has a wide range of music tastes and is always looking for new
                  music to listen to. He is here to help you find the perfect
                  record for you. <GitHubIcon href="www.github.com/nathansoum" />
                </Typography>
                <iframe
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO216tjq?utm_source=generator"
                  width="356"
                  height="400"
                  frameborder=""
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} md={5}>
              <Box
                sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Tabitha Spencer-Salmon
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Tabitha is a music lover who has a passion for vinyl records.
                  She has a wide range of music tastes and is always looking for
                  new music to listen to. She is here to help you find the perfect
                  record for you.{" "}
                  <GitHubIcon href="www.github.com/tabitha-salmon" />
                </Typography>
                <iframe
                  src="https://open.spotify.com/embed/album/4sgYpkIASM1jVlNC8Wp9oF?utm_source=generator"
                  width="356"
                  height="400"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} md={5}>
              <Box
                sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Chase Stratton
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Chase is a music lover who has a passion for vinyl records. He
                  has a wide range of music tastes and is always looking for new
                  music to listen to. He is here to help you find the perfect
                  record for you.{" "}
                  <GitHubIcon href="www.github.com/chase-stratton" />
                </Typography>
                <iframe
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdyjMX5o2vCq?utm_source=generator"
                  width="356"
                  height="400"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} md={5}>
              <Box
                sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Emily Rose
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Emily is a concert fanatic with a passion for finding new favorite artists, both big and small. 
                  Though she thrives most on indie and surf rock, her concert-going history includes just about every genre under the sun.{" "}
                  <GitHubIcon href="www.github.com/emilyerose" />
                </Typography>
                <iframe
                  src="https://open.spotify.com/embed/playlist/6f4bYfMPonkBq7IHKSkAFY"
                  width="356"
                  height="400"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
  