import './index.css'
import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function VinylItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    title,
    artist,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        vinyl: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className='container'>
      <Link to={`/vinyls/${_id}`}  style={{textDecoration: 'none'}}>
        <img className='vinyl-img'
          style={{ height: "auto", width: 300 }}
          alt={image}
          src={`https://res.cloudinary.com/daheygjio/image/upload/v1664415401/albumcovers/${image}`}
        />
        <p className="vinyl-title"><strong>{title}</strong></p>
      </Link>
      <div className='vinyl-info'>
        <div>By: {artist}</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );

}

export default VinylItem;
