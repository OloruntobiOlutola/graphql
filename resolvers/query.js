const categories = require("../data/category");
const products = require("../data/product");

module.exports = {
  products: () => {
    return products;
  },
  getProduct: (parent, args, context) => {
    return products.find((product) => product.id === args.id);
  },
  getCategories: () => categories,
  getCategory: (parent, args, context) => {
    return categories.find((category) => category.id === args.id);
  },
};
