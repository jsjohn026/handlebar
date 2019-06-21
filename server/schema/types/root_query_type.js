require("../../models");
const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

// const UserType = require("./user_type");
// const CategoryType = require("./category_type");
// const ProductType = require("./product_type");

// const User = mongoose.model("users");
// const Category = mongoose.model("categories");
// const Product = mongoose.model("products");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    // users: {
    //   type: new GraphQLList(UserType),
    //   resolve() {
    //     return User.find({});
    //   }
    // }
  })
});

module.exports = RootQueryType;
