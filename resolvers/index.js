const category = require("./category");
const mutation = require("./mutation");
const product = require("./product");
const query = require("./query");

const resolvers = {
  Query: query,
  Category: category,
  Product: product,
  Mutation: mutation,
};

module.exports = resolvers;
