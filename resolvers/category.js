module.exports = {
  products: ({ id }, { filter }, { products }) => {
    const filteredProduct = products.filter(
      (product) => product.categoryid === id
    );
    if (!filter) {
      return filteredProduct;
    }
    return filteredProduct.filter(
      (product) => product.onSale === filter.onSale
    );
  },
};
