import React from "react";
import useUIContext from "../../hooks/useUIContext";
import { useQuery } from "@apollo/client";


export default function Cart() {
  const { cartOpen, setCartOpen, showCart } = useUIContext();
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { loading, data } = useQuery(QUERY_PRODUCTS); // QUERY_PRODUCTS is a GraphQL query that will be defined in the next section
  const products = data?.products || [];
  const [state, dispatch] = useStoreContext();
  const { cart } = state;

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const calculateTotal = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.purchasePrice * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  };


  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {cart.length ? (
        <div>
          {cart.map((item) => (
            <div key={item._id} className="flex-row space-between">
              <div>
                <img
                  alt={item.name}
                  src={`/images/${item.image}`}
                />
                {item.name} x {item.purchaseQuantity}
              </div>
              <div>${item.purchasePrice * item.purchaseQuantity}</div>
            </div>
          ))}
          <div className="flex-row space-between">
            <strong>Total:</strong>
            <strong>${calculateTotal()}</strong>
          </div>
          <div className="flex-row flex-end">
            <button onClick={submitCheckout}>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
}

// Language: javascript

//   return (
//     <Drawer 
//     open ={true}
//     anchor="right"
//     PaperProps={{
//         sx: (
//             width: 500,
//             backgroundColor: "primary.main",
//             color: Color.white,

//             border: "none",
//             overflow: "hidden",

//             color: "primary_dark",
//         )
//     }}
//    


