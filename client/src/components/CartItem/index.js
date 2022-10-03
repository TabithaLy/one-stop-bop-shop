import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <Card sx={{ display: 'flex', width: 350, justifyContent: 'space-between', alignItems: 'center'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            ${item.price}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', pt: 1 }}>
      
          <TextField
            label="Quantity"
            variant="outlined"
            size="small"
            type="number"
            placeholder="1"
            style={{width: 80}}
            value={item.purchaseQuantity}
            onChange={onChange}
            
          />

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => removeFromCart(item)}
            color="inherit"
        >
            <DeleteOutlinedIcon style={{color: "#808080"}}/>
          </IconButton>
        
        </Box>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 120, height: 120, mr: 1 }}
        image={`https://res.cloudinary.com/daheygjio/image/upload/v1664415401/albumcovers/${item.image}`}
        alt={item.title + " cover"}
      />
    </Card>
  );
}

export default CartItem;