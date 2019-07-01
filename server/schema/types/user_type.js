const mongoose = require('mongoose')
const User = mongoose.model("users")
const graphql = require("graphql");
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID, 
  GraphQLBoolean,
  GraphQLList } = graphql;
const ProductType = require("./product_type");
const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean }
    //product, basket
    ,
    products: {
      type: new GraphQLList(ProductType),
      args: {_id: {type: GraphQLID} },
      resolve(parentValue, {_id}) {
        return User.findById(parentValue._id).populate('products')
        .then(user => {
          return user.products
        })
      }
    },
    reviews: {
      type: new GraphQLList(require('./review_type')),
      args: {_id: {type: GraphQLID} },
      resolve(parentValue, _id) {
        return User.findById(parentValue._id).populate('reviews')
        .then(user => {
          return user.reviews
        })
      }
    }
    
  })// end of fields
});

module.exports = UserType;