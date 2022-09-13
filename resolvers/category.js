module.exports = {
  products: ({ id }, args, { products }) => {
    return products.filter((product) => product.categoryid === id);
  },
};
