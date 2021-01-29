const data = require("./data");

const resolvers = {
  Query: {
    async product(_, { id }) {
      return data.filter((product) => product.id == id)[0];
    },
    async products(_, { type }) {
      return data.filter((product) => product.type == type);
    },
    async allProducts() {
      return data;
    },
  },
};

module.exports = resolvers;
