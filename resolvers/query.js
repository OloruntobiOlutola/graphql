module.exports = {
  products: (parent, { filter }, { products }) => {
    if (filter) {
      console.log(filter);
      const { avgRating, onSale } = filter;
      if (!avgRating) {
        return products.filter((product) => product.onSale === onSale);
      }
      if (avgRating) {
        if ([1, 2, 3, 4, 5].includes(avgRating)) {
          return products.filter(
            (product) => product.reviews.rating <= avgRating
          );
        }
      }
      if (filter.length > 1) {
        const filteredProduct = products.filter(
          (product) => product.onSale === onSale
        );
        if (![1, 2, 3, 4, 5].includes(filter.avgRating)) {
          return filteredProduct;
        }
        return filteredProduct.filter(
          (product) => product.reviews.rating <= avgRating
        );
      }
    }
    return products;
  },
  getProduct: (parent, { id }, { products }) => {
    return products.find((product) => product.id === id);
  },
  getCategories: () => categories,
  getCategory: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
  reviews: (parents, args, { reviews }) => reviews,
};
