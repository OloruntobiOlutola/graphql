const { v4: uuidv4 } = require("uuid");

module.exports = {
  addCategory: (parent, { input }, { categories }) => {
    const newCategory = {
      id: uuidv4(),
      name: input.name,
    };
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { products }) => {
    const { name, onSale, price, quantity, description, image, categoryId } =
      input;
    const newProduct = {
      id: uuidv4(),
      name,
      description,
      onSale,
      image,
      price,
      quantity,
      categoryId,
    };
    products.push(newProduct);
    return newProduct;
  },
};
