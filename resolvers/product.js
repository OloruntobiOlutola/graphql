module.exports = {
  category: ({ categoryid }, args, { categories }) => {
    return categories.find((category) => category.id === categoryid);
  },
};
