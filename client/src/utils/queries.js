import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($vinyls: [ID]!) {
    checkout(vinyls: $vinyls) {
      session
    }
  }
`;

export const QUERY_GENRES = gql`
  {
    genres {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        vinyls {
            _id
            title
            artist
            price
            quantity
            genres {
                name
            }
        }
      }
    }
  }
`;

export const QUERY_VINYLS_BY_GENRE = gql`
  query getVinyls($genre: ID) {
    vinyls(genre: $genre) {
        _id
        title
        artist
        price
        quantity
        genres {
            name
        }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    vinyls {
        _id
        title
        artist
        price
        quantity
        genres {
            name
        }
    }
  }
`;
