exports.Query = {
  hello: () => "world",
  products: (parent, args, { products }) => products,
  product: (parent, { id }, { products }) => {
    return (product = products.find((product) => product.id === id));
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
};
