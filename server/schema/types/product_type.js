const mongoose = require('mongoose');
const User = mongoose.model('users')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } = graphql
const Genre = mongoose.model('genres')
const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    fields: () => ({
        _id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {
            type: require('./genre_type'), 
            resolve(parentValue){ 
                return Genre.findById(parentValue.genre)
                .then(genre => genre)
                .catch(err => null)
            }
        },
        description: {type: GraphQLString},
        owner_id: {
            type: require('./user_type'),
            resolve(parentValue){
                return User.findById(parentValue.owner_id)
                .then(user => user)
                .catch(err => null)
            }
        },
        price: {type: GraphQLFloat},
        image_url: {type: GraphQLString}
    })//end of fields
})

module.exports = ProductType;