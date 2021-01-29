const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: Int!
    login: String!
  }

  type Product {
    id: Int!
    date: String!
    image: String!
    title: String!
    intro: String!
    description: String!
    type: String!
    format: String!
    pages: String!
    status: String!
    price: String!
    linktext: String!
    link: String!
  }

  type Query {
    current: User
    product(id: Int!): Product
    products(type: String!): [Product]
    allProducts: [Product]
  }

  type Mutation {
    register(login: String!, password: String!): String
    login(login: String!, password: String!): String
  }
`;

module.exports = typeDefs;
