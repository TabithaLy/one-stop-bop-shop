import "./index.css";
import React, { useEffect } from "react";
import { QUERY_BY_ID } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";


function SingleProduct() {
  const { _id } = useParams();
  const { loading, error, data } = useQuery(QUERY_BY_ID, {
    variables: { _id },
  });

  useEffect(() => {
    if (data) {
      console.log("=====data====", data);
    }
  }, [data]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="image-container" width='300'>
          <img className="image" height='300' width='300' alt="album cover" src={`https://res.cloudinary.com/daheygjio/image/upload/v1664415401/albumcovers/${data.vinyl.image}`} />
        </div>
        <div className="info-container">
            <Typography variant="h2" sx={{fontFamily: 'monospace', fontWeight: 700, mb: 3}}>{data.vinyl.title}</Typography>
            <Typography variant="h4" sx={{fontFamily: 'monospace',  mb: 3}} className="artist">{data.vinyl.artist}</Typography>
            <Typography variant="h4" sx={{fontFamily: 'monospace',  mb: 3}} className="price">{data.vinyl.price}</Typography>
            <button className="button">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
