const categories = require("../data/category");
const products = require("../data/product");

module.exports = {
  products: (parent, args, { products }) => products,
  getProduct: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },
  getCategories: () => categories,
  getCategory: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
};
