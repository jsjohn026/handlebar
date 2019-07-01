const mongoose = require('mongoose')
const graphql = require('graphql')
const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInt} = graphql
const Review = mongoose.model("reviews")

const User = mongoose.model("users")
const Product = mongoose.model("products")

const GenreType = new GraphQLObjectType({
    name: "ReviewType",
    fields: () => ({
        _id: {type: GraphQLID},
        title: { type: GraphQLString },
        content: {type: GraphQLString},
        product: {
            type: require('./product_type'),
            resolve(parentValue){
                return Product.findById(parentValue.product)
            }
        },
        reviewer: {
            type: require('./user_type'),
            resolve(parentValue){
                return User.findById(parentValue.reviewer)
                .then(user => user)
                .catch(err => null)
            }
        },
        rating: { type: GraphQLInt }
    })
})

module.exports = GenreType