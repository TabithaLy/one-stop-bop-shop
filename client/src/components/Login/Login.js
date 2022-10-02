
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';


// const [formState, setFormState] = useState({ email: '', password: '' });
// const [login, { error }] = useMutation(LOGIN);

// // update state based on form input changes
// const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//         ...formState,
//         [name]: value,
//     });
// };

// // submit form
// const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//         const { data } = await login({
//             variables: { ...formState },
//         });

//         Auth.login(data.login.token);
//     } catch (e) {
//         console.error(e);
//     }

//     // clear form values 
//     setFormState({
//         email: '',
//         password: '',
//     });
// };

const theme = createTheme();

export default function Login() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);


    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    }

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        }
        catch (e) {
            console.error(e);

        }

        // clear form values
        setFormState({

            email: '',
            password: '',
        });
    }

    return (

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h1>Login</h1>
                    <form onSubmit={handleFormSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                </Box>
            </Container>
        </ThemeProvider>
    );
}




//     handleInputChange = (event) => {
//         const { name, value } = event.target;
//         this.setState({
//             [name]: value
//         });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.setState({redirect: true});
//     };

//     render() {
//         if (this.state.redirect) {
//             return <Redirect to='/home' />
//         }
//         return ( 

//     export default function Login() {
//         const [formState, setFormState] = useState({ email: '', password: '' });
//         const [login, { error }] = useMutation(LOGIN);

//         const handleChange = (event) => {
//             const { name, value } = event.target;
//             setFormState({
//               ...formState,
//               [name]: value,
//             });
//           };

//         const handleSubmit = async (event) => {
//             event.preventDefault();
//             try {
//             const mutationResponse = await login({
//                 variables: { email: formState.email, password: formState.password },
//             });
//             const token = mutationResponse.data.login.token;
//             Auth.login(token);
//             } catch (e) {
//             console.log(e);
//             }
//           }

//         return (
//             <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <Box
//                     sx={{
//                         marginTop: 8,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign in
//                     </Typography>
//                     <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//                         <TextField

//                             margin="normal"
//                             required
//                             fullWidth
//                             id="email"
//                             label="Email Address"
//                             name="email"
//                             autoComplete="email"
//                             autoFocus
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             autoComplete="current-password"
//                             onChange={handleChange}
//                         />
//                         <FormControlLabel
//                             control={<Checkbox value="remember" color="primary" />}
//                             label="Remember me"
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             sx={{ mt: 3, mb: 2 }}
//                         >
//                             Sign In
//                         </Button>
//                         <Grid container>

//                             <Grid item>
//                                 <Link to="/signup" variant="body2">
//                                     {"Don't have an account? Sign Up"}
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 </Box>
//                 <Box mt={8}>

//                 </Box>
//                 {error ? (
//                     <div>
//                         <p className="error-text">The provided credentials are incorrect</p>
//                     </div>
//                     ) : null}
//             </Container>
//         </ThemeProvider>
//         )
//     }   
// }





// Language: javascript

// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Container from '@material-ui/core/Container';
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';

// logic for the login page to thats going to take you to home page if you are logged in

// const theme = createTheme();

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const history = useHistory();
//     const { currentUser } = useAuth();

//     async function handleSubmit(e) {
//         e.preventDefault();

//         try {
//             setError("");
//             await login(email, password);
//             history.push("/");
//         } catch {
//             setError("Failed to log in");
//         }
//     }

//     return (
//         <ThemeProvider theme={theme}>
//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <div className={classes.paper}>
//                     <Avatar className={classes.avatar}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign in
//                     </Typography>
//                     {error && <Alert severity="error">{error}</Alert>}
//                     <form className={classes.form} noValidate onSubmit={handleSubmit}>
//                         <TextField
//                             variant="outlined"
//                             margin="normal"
//                             required
//                             fullWidth
//                             id="email"
//                             label="Email Address"
//                             name="email"
//                             autoComplete="email"
//                             autoFocus
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <TextField

//                             variant="outlined"
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             autoComplete="current-password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <FormControlLabel
//                             control={<Checkbox value="remember" color="primary" />}
//                             label="Remember me"
//                         />
//                         <Button

//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             color="primary"
//                             className={classes.submit}
//                         >
//                             Sign In
//                         </Button>
//                         <Grid container>
//                             <Grid item xs>
//                                 <Link href="#" variant="body2">
//                                     Forgot password?
//                                 </Link>
//                             </Grid>
//                             <Grid item>
//                                 <Link href="/signup" variant="body2">
//                                     {"Don't have an account? Sign Up"}
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </div>
//                 <Box mt={8}>
//                 </Box>
//             </Container>
//         </ThemeProvider>
//     );
// }

// Path: client/src/components/Signup/Signup.js