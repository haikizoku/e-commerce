exports.Query = {
  hello: () => "world",
  products: (parent, { filter }, { products }) => {
    let filterProducts = products;

    if (filter) {
      if (filter.onSale === true) {
        filterProducts = filterProducts.filter((product) => {
          return product.onSale;
        });
      }
    }

    return filterProducts;
  },
  product: (parent, { id }, { products }) => {
    return (product = products.find((product) => product.id === id));
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
};
