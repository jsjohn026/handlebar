const mongoose = require("mongoose");
const graphql = require("graphql");
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLID } = graphql;

// const UserType = require("./types/user_type");
// const CategoryType = require("./types/genre_type");
// const ProductType = require("./types/product_type");
// const AuthService = require("../services/auth");

// const Category = mongoose.model("genres");
// const Product = mongoose.model("products");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
  
  }
});

module.exports = mutation;
