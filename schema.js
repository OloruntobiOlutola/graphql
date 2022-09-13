const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    products: [Product!]!
    getProduct(id: ID!): Product
    getCategories: [Category!]!
    getCategory(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

module.exports = typeDefs;
