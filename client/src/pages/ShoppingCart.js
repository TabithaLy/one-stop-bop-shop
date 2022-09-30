// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_VINYLS,
} from '../utils/actions';
import { QUERY_VINYLS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
// import spinner from '../assets/spinner.gif';

// function ShoppingCart() {
//   const [state, dispatch] = useStoreContext();
//   const { id } = useParams();

  const [currentVinyl, setCurrentVinyl] = useState({});

  const { loading, data } = useQuery(QUERY_VINYLS);

  const { vinyls, cart } = state;

  useEffect(() => {
    // already in global store
    if (vinyls.length) {
      setCurrentVinyl(vinyls.find((vinyl) => vinyl._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_VINYLS,
        vinyls: data.vinyls,
      });

      data.vinyls.forEach((vinyl) => {
        idbPromise('vinyls', 'put', vinyl);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('vinyls', 'get').then((indexedVinyls) => {
        dispatch({
          type: UPDATE_VINYLS,
          vinyls: indexedVinyls,
        });
      });
    }
  }, [vinyls, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        vinyl: { ...currentVinyl, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentVinyl, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentVinyl._id,
    });

    idbPromise('cart', 'delete', { ...currentVinyl });
  };

  return (
    <>
      {currentVinyl && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Vinyls</Link>

          <h2>{currentVinyl.title}</h2>

          <p>Artist: {currentVinyl.artist}</p>

          <p>
            <strong>Price:</strong>${currentVinyl.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentVinyl._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`https://res.cloudinary.com/daheygjio/image/upload/v1664415401/albumcovers/${currentVinyl.image}`}
            alt={currentVinyl.title}
          />
        </div>
      ) : null}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
      <Cart />
    </>
  );
}

// export default ShoppingCart;
