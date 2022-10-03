import React, { useEffect } from "react";
import { QUERY_VINYLS } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

function SingleProduct() {
    const { _id } = useParams();
    const { loading, error, data } = useQuery(QUERY_VINYLS);
    if (loading) return <p>loading</p>;

    return (
        <>
        <h1>Album ID: { _id }</h1>
  
        </>
    );
}

export default SingleProduct;