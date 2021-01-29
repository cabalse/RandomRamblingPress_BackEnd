const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: "*",
    credentials: true,
  },
  playground: {
    endpoint: "/service",
  },
  introspection: true,
});

server.applyMiddleware({ app, path: "/service" });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("The server started on port " + PORT);
});
