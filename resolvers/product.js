const categories = require("../data/category");

module.exports = {
  category: (parent, args, context) => {
    const id = parent.categoryid;
    return categories.find((category) => category.id === id);
  },
};
