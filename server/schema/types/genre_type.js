const mongoose = require('mongoose')
const graphql = require('graphql')
const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = graphql
const Genre = mongoose.model("genres")
const ProductType = require('./product_type')

const GenreType = new GraphQLObjectType({
    name: "GenreType",
    fields: () => ({
        _id: {type: GraphQLID},
        name: { type: GraphQLString },
        image_url: {type: GraphQLString},
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