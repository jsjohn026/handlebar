const mongoose = require("mongoose");
const graphql = require("graphql");
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLFloat, 
  GraphQLID } = graphql;

const UserType = require("./types/user_type");
const GenreType = require("./types/genre_type");
const ProductType = require("./types/product_type");
const AuthService = require("../service/auth")

const Genre = mongoose.model("genres");
const Product = mongoose.model("products");
const User = mongoose.model("users")

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
      resolve(_,args) {
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
    },
    newGenre: {
      type: GenreType,
      args: {
        name: {type: GraphQLString }
      },
      resolve(parent, args) {
        return new Genre({name: args.name}).save()
      }
    },
    deleteGenre: {
      type: GenreType,
      args: { 
        _id: { type: GraphQLID } 
      },
      resolve(parent, args) {
        return Genre.findByIdAndDelete(args._id)
      }
    },
    newProduct: {
      type: ProductType,
      args: {
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        image_url: {type: GraphQLString},
        price: {type: GraphQLFloat},
        genre: {type: GraphQLID},
        owner_id: {type: GraphQLID} 
      },
      resolve: async(parent, data, context) => {
        // const validUser = await AuthService.verifyUser( {token: context.token} )
        
        // if(validUser.loggedIn) {
          const product = new Product(data)
          return Genre.findById(data.genre).then(genre => {
            genre.products.push(product)
              return User.findById(data.owner_id).then(user => {
                user.products.push(product)
                return Promise.all([product.save(), genre.save(), user.save()] ).then(
                  ([product,category, user]) => {
                    console.log(product)
                    return product
                  }
                )
              })
            })
          
        // } else {
        //   throw new Error("You must be logged in to create a product")
        // }
      }
    },
    deleteProduct: {
      type: ProductType,
      args: {
        id: {type: GraphQLID }
      },
      resolve(parent, {id}) {
        const product = Product.findById(id)
        Genre.find({}).then(genres => 
          genres.forEach(genre => {
              genre.products.pull(product._id)
              genre.save()
            })
        )
        return product.deleteOne()
      }
    },
  }//end of fields
});

module.exports = mutation;
