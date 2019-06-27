const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false)
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
    },
    newGenre: {
      type: GenreType,
      args: {
        name: {type: GraphQLString },
        image_url: {type: GraphQLString}
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
        owner: {type: GraphQLID} 
      },
      async resolve(parent, data, context) {
        // auth for frontend
        const validUser = await AuthService.verifyUser( {token: context.token} )
        
        if(validUser.loggedIn) {
          const product = new Product(data)
          return Genre.findById(data.genre).then(genre => {
            genre.products.push(product)
              return User.findById(data.owner).then(user => {
                user.products.push(product)
                return Promise.all([product.save(), genre.save(), user.save()] ).then(
                  ([product,category, user]) => {
                    console.log(product)
                    return product
                  }
                )
              })
            }
          )
        } else {
          throw new Error("You must be logged in to create a product")
        }
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
    updateProductGenre: {
      type: ProductType,
      args: {
        _id: {type: GraphQLID},
        genre_id: {type: GraphQLID}
      },
      resolve(parent, args) {
        return Product.updateProductGenre(args._id, args.genre_id)
      }
    },
    updateProduct: {
      type: ProductType,
      args: {
        _id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLFloat},
        image_url: {type: GraphQLString}
      },
      resolve(parentValue, {_id, name, description, price, image_url}) {
        const updateObj = {};

        if(_id) updateObj._id = _id
        if(name) updateObj.name = name
        if(description) updateObj.description = description
        if(price) updateObj.price = price
        if(image_url) updateObj.image_url = image_url

        return Product.findByIdAndUpdate(
          { _id: _id },
          { $set: updateObj },
          { new : true},
          (err, product) => {
            return product
          }
        );
      }
    },
  }//end of fields
});

module.exports = mutation;
