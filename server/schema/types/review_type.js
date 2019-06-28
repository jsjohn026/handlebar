const mongoose = require('mongoose')
const graphql = require('graphql')
const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = graphql
const Review = mongoose.model("genres")
const ProductType = require('./product_type')
const UserType = require('./review_type')

const GenreType = new GraphQLObjectType({
    name: "GenreType",
    fields: () => ({
        _id: {type: GraphQLID},
        title: { type: GraphQLString },
        content: {type: GraphQLString},
        products: {
            type: new GraphQLList(ProductType),
             resolve(parentValue, {_id}) {
                return Genre.findById(parentValue._id).populate('products')
                .then(genre => {
                    return genre.products
                })
            }
        }
    })
})

module.exports = GenreType