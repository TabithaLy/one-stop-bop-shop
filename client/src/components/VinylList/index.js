import React, { useEffect } from "react";
import VinylItem from "../VinylItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_VINYLS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_VINYLS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { Box, Grid } from "@mui/material";

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
                console.log(vinyl.title)
                return true
            }
        }
        return false});
  }

  // return (
  //   <div className="my-2">
  //     <h2>Our Vinyls:</h2>
  //     {state.vinyls.length ? (
  //       <div className="flex-row">
  //         {filterVinyls().map((vinyl) => (
  //           <VinylItem
  //             key={vinyl._id}
  //             _id={vinyl._id}
  //             image={vinyl.image}
  //             title={vinyl.title}
  //             artist={vinyl.artist}
  //             price={vinyl.price}
  //             quantity={vinyl.quantity}
  //           />
  //         ))}
  //       </div>
  //     ) : (
  //       <h3>
  //         Nothing to display. Please contact us to request specific products!{" "}
  //       </h3>
  //     )}
  //   </div>
  // );

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs:2, md:1 }} columns={{ xs: 4, sm: 8, md: 12}}>
        {filterVinyls().map((vinyl) => (
          <Grid item xs={2} sm={4} md={4}>
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
  )


}

export default VinylList;
