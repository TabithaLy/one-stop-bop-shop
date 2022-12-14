
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
            sx={{fontFamily: 'monospace', fontWeight: 600}}
          >
            Our Curators!
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            sx={{mb:4}}
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
                  sx={{fontFamily: 'monospace', fontWeight: 600}}
                >
                  Nathan Soum
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Nathan is a big music fan who is constantly looking for new styles. He
                  had the original idea for this store, thinking that people needed a consistent vinyl supplier
                  with a site that catered to music lovers. <a href="https://www.github.com/nathansoum"><GitHubIcon /></a>
                </Typography>
                <iframe
                  src="https://open.spotify.com/embed/playlist/1QcsybeUidDJIrPQTHS6dD?utm_source=generator"
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
                  sx={{fontFamily: 'monospace', fontWeight: 600}}
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
                  <a href="https://github.com/TabithaLy"><GitHubIcon/> </a>
                </Typography>
                <iframe
                  src="https://open.spotify.com/embed/playlist/0IrgXOByxvY2Q0SozycxkR?utm_source=generator"
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
                  sx={{fontFamily: 'monospace', fontWeight: 600}}
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
                  <GitHubIcon href="https://www.github.com/chase-stratton" />
                </Typography>
                <iframe
                  src="https://open.spotify.com/embed/playlist/5nvSJckENBqAPlZsMagSJa?utm_source=generator"
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
                  sx={{fontFamily: 'monospace', fontWeight: 600}}
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
                  <a href="https://www.github.com/emilyerose"><GitHubIcon/> </a>
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
  