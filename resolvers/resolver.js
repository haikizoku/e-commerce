exports.resolvers = {
  Query: {
    hello: () => "world",
    products: () => products,
    product: (parent, args, context) => {
      const { id } = args;
      return (product = products.find((product) => product.id === id));
    },
    categories: (parent, args, context) => categories,
    category: (parent, args, context) => {
      const { id } = args;
      return categories.find((category) => category.id === id);
    },
  },
};
