import * as React from 'react';
import {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AlbumIcon from '@mui/icons-material/Album';
import Badge from '@mui/material/Badge';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import Auth from '../../utils/auth';
import './style.css';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
//import Autocomplete from '@mui/material/Autocomplete';
import {Link} from 'react-router-dom'

import CartItem from '../CartItem';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART,UPDATE_SEARCH } from '../../utils/actions';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#1d6e8c',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#eda96c',
    },
    error: {
        main: '#ec703d',
      },
  },
});



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const stripePromise = loadStripe('pk_test_51LoYXUIP0IqlLShQslIZGl82nBgTpuVEpuK1o3mB0RThvXdFseFdvBSyl5T3U06lxlZkon7D8aANUEXy8Va44FJj00sVuGhVib');

const settings = ['Account', 'Cart', 'Logout'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElCart, setAnchorElCart] = React.useState(null);
    const [autocompleteInputValue, setAutocompleteInputValue] = React.useState('');
    const [value, setValue] = React.useState(0);
    const { userdata } = useQuery(QUERY_USER);
    let user;
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data, error }] = useLazyQuery(QUERY_CHECKOUT);
    if (error) {console.log(error)}
    // We check to see if there is a data object that exists, if so this means that a checkout session was returned from the backend
    // Then we should redirect to the checkout with a reference to our session id
    useEffect(() => {
      if (data) {
        stripePromise.then((res) => {
          res.redirectToCheckout({ sessionId: data.checkout.session });
        });
      }
    }, [data]);
  
    // If the cart's length or if the dispatch function is updated, check to see if the cart is empty.
    // If so, invoke the getCart method and populate the cart with the existing from the session
    useEffect(() => {
      async function getCart() {
        const cart = await idbPromise('cart', 'get');
        dispatch({ type: ADD_MULTIPLE_TO_CART, vinyls: [...cart] });
      }
  
      if (!state.cart.length) {
        getCart();
      }
    }, [state.cart.length, dispatch]);
  
    function toggleCart() {
      dispatch({ type: TOGGLE_CART });
    }
  
    function calculateTotal() {
      let sum = 0;
      state.cart.forEach((item) => {
        sum += item.price * item.purchaseQuantity;
      });
      return sum.toFixed(2);
    }
  
    // When the submit checkout method is invoked, loop through each item in the cart
    // Add each item id to the vinylIds array and then invoke the getCheckout query passing an object containing the id for all our vinyls
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (event.target.page === "Logout") {
            Auth.logout();
        }
    };
    const handleOpenCartMenu = (event) => {
        setAnchorElCart(event.currentTarget);
    };

    const handleCloseCartMenu = () => {
        setAnchorElCart(null);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (setting) => {
        console.log(setting)
        setAnchorElUser(setting)
        if (setting === "Logout") {
            console.log("CALLING LOGOUT")
            Auth.logout();
        }
        else if (setting=== "Cart") {
            window.location.assign('/cart')
        }
        setAnchorElUser(null);
    };

    const handleSearchChange = (event) => {
        setAutocompleteInputValue(event.target.value);
    }

    const handleSearch = (searchString) => {
        dispatch({
          type: UPDATE_SEARCH,
          search: searchString,
        });
      };

        return (
            <ThemeProvider theme={theme}>
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AlbumIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            One Stop Bop Shop
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            
                        </Box>
                        
                        <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                {/* <Autocomplete
                                    id="search"
                                    inputValue={autocompleteInputValue}
                                    onInputChange={(event, newInputValue) => {
                                    setAutocompleteInputValue(newInputValue);
                                    console.log(autocompleteInputValue)
                                    }}
                                    freeSolo
                                    options={['daf','dafskj','weori']}
                                    renderInput={(params) => <StyledInputBase {...params} placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />}
                                    /> */}
                                <StyledInputBase id="search"
                                    placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
                                    value={autocompleteInputValue}
                                    onChange={handleSearchChange}
                                    >

                                    </StyledInputBase>
                            </Search>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open User Menu">
                                <IconButton onClick={handleOpenUserMenu} size="large" aria-label="show user menu" color="inherit">
                                    <PersonIcon/>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {Auth.loggedIn() ? (settings.map((setting) => (
                                    <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))) : (<MenuItem key='amLoggedOut' onClick= {() => {handleCloseUserMenu('amLoggedOut')}}>
                                        <Typography textAlign="center">You are not logged in. <br></br>
                                        <Link to='/login'>Sign In</Link> to view your account.</Typography>
                                    </MenuItem>)}
                            </Menu>


                        <Tooltip title="Open Cart">
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleOpenCartMenu}>
                                <Badge badgeContent={state.cart.length} color="error">
                                    <CartIcon/>
                                </Badge>
                                </IconButton>
                        </Tooltip>
                        <Menu
                            id="cart"
                            anchorEl={anchorElCart}
                            open={Boolean(anchorElCart)}
                            onClose={handleCloseCartMenu}
                        >
                            {state.cart.length ? (
                                <div>
                                {state.cart.map((item) => (
                                    <MenuItem key={item._id}>
                                        <CartItem key={item._id} item={item} />
                                    </MenuItem>
                                ))}
                                <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems = "center"
                                
                                >
                                    <Grid item >
                                        
                                            <Typography sx={{ mx: 3 }}>Total: ${calculateTotal()} </Typography>
                                        
                                    </Grid>
                                    <Grid item >
                                        
                                            {Auth.loggedIn() ? (
                                            <Button variant="text"  color="inherit" sx={{mx: 2}} onClick={submitCheckout}>Checkout</Button>
                                            ) : (
                                            <Typography sx={{mx:3}}><Link to='/login'>Sign In</Link> To Check Out.</Typography>
                                            )}
                                        
                                    </Grid>
                                </Grid>
                                
                                </div>
                            ) : (
                                <Typography variant="subtitle1" sx={{mx:3}}>
                                You haven't added anything to your cart yet!
                                </Typography>
                            )}
                        </Menu>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            </ThemeProvider>
        );
    
};
export default Header;