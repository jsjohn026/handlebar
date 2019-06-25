const mongoose = require("mongoose");
const graphql = require("graphql");
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLID } = graphql;

const UserType = require("./types/user_type");
// const CategoryType = require("./types/genre_type");
// const ProductType = require("./types/product_type");
const AuthService = require("../service/auth")

// const Category = mongoose.model("genres");
// const Product = mongoose.model("products");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: UserType,
      args: {
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
      },
      resolve(_, args){
        return AuthService.register(args)
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: {type: GraphQLString}
      },
      resolve(_, args) {
        return AuthService.login(args)
      }
    },
    logout: {
      type: UserType,
      args: {
        _id: { type: GraphQLID }
      },
      resolve(_, args) {
        return AuthService.logout(args)
      }
    },
    verifyUser: {
      type: UserType,
      args: {
        token: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.verifyUser(args)
      }
    }
  }//end of fields
});

module.exports = mutation;
