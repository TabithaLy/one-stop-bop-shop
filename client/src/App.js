import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer/index";
import './App.css';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Vinyls from './pages/Vinyls'
import SingleProduct from './pages/Records';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
// import Success from './pages/Success';
// import OrderHistory from './pages/OrderHistory';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Header />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route
                path="/vinyls"
                element={<Vinyls/>}
                />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/vinyls/:_id" 
                element={<SingleProduct />} 
              />
              {/* <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              /> */}
              <Route 
                path="/products/:id" 
                element={<ShoppingCart />} 
              />
              {/* <Route 
                path="*" 
                element={<NoMatch />} 
              /> */}
            </Routes>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

