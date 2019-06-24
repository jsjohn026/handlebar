const graphql = require("graphql");
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID, 
  GraphQLBoolean } = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean }
    //product, genre
    // ,
    // products: {
    //   type: new GraphQLList(productype),
    //   args: {_id: {type: GraphQLID} },
    //   resolve(parentValue, {_id}) {
    //     return User.findById(_id).populate('products')
    //     .then(user => {
    //       return user.products
    //     })
    //   }
    // },
    //genre: {
        //type: require('./genre_type),
        //resolve(parentValue) {
          // return Genre.findById(parentValue.genre).then(genre => genre)
        //}
    //}
  }// end of fields
});

module.exports = UserType;