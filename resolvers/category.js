const products = require("../data/product");

module.exports = {
  products: (parent, args, context) => {
    const { id } = parent;
    return products.filter((product) => product.categoryid === id);
  },
};
