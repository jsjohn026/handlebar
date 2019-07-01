require("../../models");
const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const AuthService = require("../../service/auth");

const UserType = require("./user_type");
const GenreType = require("./genre_type");
const ProductType = require("./product_type");
const ReviewType = require("./review_type");

const User = mongoose.model("users");
const Genre = mongoose.model("genres");
const Product = mongoose.model("products");
const Review = mongoose.model("reviews")

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      args: {_id: { type: new GraphQLNonNull(GraphQLID)} },
      resolve(_, args) {
        return User.findById(args._id)
      }
    },
    currentUser: {
      type: UserType,
      args: {},
      resolve(parentValue, args, context) {
        
        return AuthService.currentUser({ token: context.token });
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve() {
        return Product.find({});
      }
    },
    product: {
      type: ProductType,
      args: {_id: { type: new GraphQLNonNull(GraphQLID)} },
      resolve(_, {_id}) {
        return Product.findById(_id)
      }
    },
    genres: {
      type: new GraphQLList(GenreType),
      resolve(){
        return Genre.find({})
      }
    },
    genre: {
      type: GenreType,
      args: {_id: {type: new GraphQLNonNull(GraphQLID)} },
      resolve(_, args){
        return Genre.findById(args._id)
      }
    },
    reviews :{
      type: new GraphQLList(ReviewType),
      resolve(){
        return Review.find({});
      }
    },
    review: {
      type: ReviewType,
      args: {_id: { type: new GraphQLNonNull(GraphQLID)} },
      resolve(_, args) {
        return Review.findById(args._id)
      }
    },
  })// end of fields
});

module.exports = RootQueryType;
