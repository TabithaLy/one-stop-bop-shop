import * as React from "react";

import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import CartItem from "../components/CartItem";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
//import Autocomplete from '@mui/material/Autocomplete';
import { useStoreContext } from '../utils/GlobalState';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import Button from "@mui/material/Button";
import { useEffect } from "react";



export default function CartPage() {
    const [state, dispatch] = useStoreContext();
    const { userdata } = useQuery(QUERY_USER);
    let user;
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
  
    // We check to see if there is a data object that exists, if so this means that a checkout session was returned from the backend
    // Then we should redirect to the checkout with a reference to our session id
    useEffect(() => {
      if (data) {
        stripePromise.then((res) => {
          res.redirectToCheckout({ sessionId: data.checkout.session });
        });
      }
    }, [data]);
  
    


    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
          sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
      }

    function submitCheckout() {
        const vinylIds = [];
    
        state.cart.forEach((item) => {
          for (let i = 0; i < item.purchaseQuantity; i++) {
            vinylIds.push(item._id);
          }
        });
        console.log(vinylIds)
        getCheckout({
          variables: { vinyls: vinylIds },
        });
      }
  
      if (userdata) {
          user = userdata.user;
      }


    return (
      <div>
        <Container sx={{m:5}} justify="center" align="center">
          <Typography
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{fontFamily: 'monospace', fontWeight: 700}}
          >
            Your Cart:
          </Typography>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} spacing={2}>
                {state.cart.length ? (
                        <div>
                        {state.cart.map((item) => (
                            <Grid item xs={12} sx={{mt: 2}}>
                                <CartItem key={item._id} item={item} sx={{m: 2}}/>
                            </Grid>
                        ))}
                        <Grid
                        container
                        item
                        direction="row"
                        justifyContent="center"
                        alignItems = "center"
                        sx={{mt: 2}}
                        >
                            <Grid item >
                                    <Typography sx={{fontFamily: 'monospace', fontWeight: 700, mx: 4}}>Total: ${calculateTotal()} </Typography>
                            </Grid>
                            <Grid item >
                            
                                <Button variant="text"  color="inherit" sx={{fontFamily: 'monospace', fontWeight: 700, mx: 3}} onClick={submitCheckout}>Checkout</Button>
                                    
                            </Grid>
                        </Grid>
                        
                        </div>
                            ) : (
                                <Typography variant="subtitle1" sx={{mx:3}}>
                                You haven't added anything to your cart yet!
                                </Typography>
                            )}
            </Grid>
          </Grid>
          
        </Container>
      </div>
    );
  }