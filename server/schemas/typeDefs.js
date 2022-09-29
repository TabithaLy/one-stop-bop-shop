const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Genre {
    _id: ID
    name: String
  }

  type Vinyl {
    _id: ID
    title: String
    artist: String
    releaseYear: Int
    image: String
    price: Float
    quantity: Int
    genres: [Genre]
  }

  type Order {
    _id: ID
    purchaseDate: String
    vinyls: [Vinyl]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    genre: [Genre]
    vinyls(genre: ID, name: String): [Vinyl]
    vinyl(_id: ID!): Vinyl
    user: User
    order(_id: ID!): Order
    checkout(vinyls: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(vinyls: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateVinyl(_id: ID!, quantity: Int!): Vinyl
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
