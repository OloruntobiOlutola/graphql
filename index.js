const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { categories, products } = require("./data");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    categories,
    products,
  },
});

server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
