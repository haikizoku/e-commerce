const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./shema");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const { products, categories } = require("./db");
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    categories,
    products,
  },
});

server.listen().then(({ url }) => {
  console.log("server is ready  at " + url);
});
