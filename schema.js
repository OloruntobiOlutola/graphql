const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    products(filter: ProductsFilter): [Product!]!
    getProduct(id: ID!): Product
    getCategories: [Category!]!
    getCategory(id: ID!): Category
    reviews: [Review!]!
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProduct!): Product!
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
    reviews: [Review]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilter): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilter {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }
  input AddProduct {
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryid: ID!
  }
`;

module.exports = typeDefs;
