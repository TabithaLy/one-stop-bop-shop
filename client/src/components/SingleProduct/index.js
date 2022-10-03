import "./index.css";
import React, { useEffect } from "react";
import { QUERY_BY_ID } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

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
        <div className="image-container">
          <img className="image" alt="album cover" src={`https://res.cloudinary.com/daheygjio/image/upload/v1664415401/albumcovers/${data.vinyl.image}`} />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
