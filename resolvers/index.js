const category = require("./category");
const product = require("./product");
const query = require("./query");

const resolvers = {
  Query: query,
  Category: category,
  Product: product,
};

module.exports = resolvers;
