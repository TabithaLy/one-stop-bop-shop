import React, { useEffect } from "react";
import VinylItem from "../VinylItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_VINYLS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_VINYLS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { Box, Grid } from "@mui/material";

const styling = {
  container: {
    backgroundColor: 'white',
    padding: 5,
    paddingRight: 2,
  }
}

function VinylList() {
  const [state, dispatch] = useStoreContext();

  const { currentGenre } = state;

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
                return true;
            }
        }
        return false});
  }
  
  return (
    <>
    <div className="search-result">
    <h2>Your Search Results:</h2>
    </div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={ styling.container } container spacing={2}>
        {filterVinyls().map((vinyl) => (
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
    </Box>
    </>
  )


}

export default VinylList;
