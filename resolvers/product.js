module.exports = {
  category: ({ categoryid }, args, { categories }) => {
    return categories.find((category) => category.id === categoryid);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((reviews) => reviews.productId === id);
  },
};
