import React, { useEffect } from "react";
import VinylItem from "../VinylItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_VINYLS, UPDATE_GENRES, UPDATE_CURRENT_GENRE} from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_VINYLS, QUERY_GENRES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { Box, Grid, ListItemButton, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from "@mui/material/Divider";

const styling = {
  container: {
    backgroundColor: 'white',
    paddingBottom: 4,
    paddingRight: 2,
    paddingTop: 2,
    paddingLeft: 6
  }
}

function VinylList() {
  const [state, dispatch] = useStoreContext();

  const { currentGenre, genres } = state;
  const { genreloading, data: genreData } = useQuery(QUERY_GENRES);

  useEffect(() => {
    if (genreData) {
      dispatch({
        type: UPDATE_GENRES,
        genres: genreData.genres,
      });
      genreData.genres.forEach((genre) => {
        idbPromise('genres', 'put', genre);
      });
    } else if (!genreloading) {
      idbPromise('genres', 'get').then((genres) => {
        dispatch({
          type: UPDATE_GENRES,
          genres: genres,
        });
      });
    }
  }, [genreData, genreloading, dispatch]);

  const { loading, data } = useQuery(QUERY_VINYLS);
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_VINYLS,
        vinyls: data.vinyls,
      });
      data.vinyls.forEach((vinyl) => {
        idbPromise("vinyls", "put", vinyl);
      });
    } else if (!loading) {
      idbPromise("vinyls", "get").then((vinyls) => {
        dispatch({
          type: UPDATE_VINYLS,
          vinyls: vinyls,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterVinyls() {
    if (!currentGenre) {
      return state.vinyls;
    }

    return state.vinyls.filter((vinyl) => {
        for (let i=0; i<vinyl.genres.length; i++) {
            if (vinyl.genres[i]._id === currentGenre) {
                console.log(vinyl.title)
                return true
            }
        }
        return false});
  }
  const handleGenreClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_GENRE,
      currentGenre: id,
    });
  };

  return (
    <>
    <Box sx={{ flexGrow: 1, mx:5}}>
        <Grid container sx={{pt: 2}}>
            <Grid item xs={2} direction='row' alignItems='flex-start'>
                <List sx={{pt:10}}>
                    <ListItem sx={{fontWeight: 'bold', mb: 2}}>Browse By Category</ListItem>
                    {genres.map((oneGenre) => {
                        return (
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => handleGenreClick(oneGenre._id)}>{oneGenre.name}</ListItemButton>
                                
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>
            <Grid  xs={10} item spacing={2} >
                <Box sx={{ px:6,  fontFamily: 'monospace', fontWeight: 700}}>
                    <h2>Your Search Results </h2>
                </Box>
                <Grid sx={ styling.container } container spacing={2}>
                {filterVinyls().slice(0,12).map((vinyl) => (
                <Grid sx={ styling.container } item xs={12} sm={6} md={3}>
                    <VinylItem 
                    key={vinyl._id}
                    _id={vinyl._id}
                    image={vinyl.image}
                    title={vinyl.title}
                    artist={vinyl.artist}
                    price={vinyl.price}
                    quantity={vinyl.quantity}
                    />
                </Grid>
                ))}
        </Grid>
        </Grid>
      </Grid>
    </Box>
    </>
  )


}

export default VinylList;
