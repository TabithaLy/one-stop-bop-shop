import { gql } from '@apollo/client';

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
            image
            quantity
            genres {
                name
            }
        }
      }
    }
  }
`;

export const QUERY_VINYLS = gql`
  query getVinyls($genre: ID) {
    vinyls(genre: $genre) {
        _id
        title
        artist
        price
        image
        quantity
        genres {
            name
            _id
        }
    }
  }
`;

export const QUERY_VINYLS_BY_SEARCH = gql`
    query getVinyls($search: String){
        vinyls(search: $search) {
            _id
            title
            artist
            price
            image
            quantity
            genres {
                name
                _id
            }
        }
    }`;

export const QUERY_ALL_VINYLS = gql`
  {
    vinyls {
        _id
        title
        artist
        price
        image
        quantity
        genres {
            name
            _id
        }
    }
  }
`;

export const QUERY_BY_ID = gql`
  query getVinyls($id: ID!) {
    vinyl(id: $id) {
        _id
        title
        artist
        price
        image
        quantity
        genres {
            name
            _id
        }
    }
  }
`;

