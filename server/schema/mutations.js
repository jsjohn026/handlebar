const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false)
const graphql = require("graphql");
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLFloat, 
  GraphQLID, GraphQLInt } = graphql;

const UserType = require("./types/user_type");
const GenreType = require("./types/genre_type");
const ProductType = require("./types/product_type");
const AuthService = require("../service/auth");
const ReviewType = require("./types/review_type");

const Genre = mongoose.model("genres");
const Product = mongoose.model("products");
const User = mongoose.model("users")
const Review = mongoose.model("reviews")

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
          data.owner = validUser.id;
          const product = new Product(data)
          return Genre.findById(data.genre).then(genre => {
            genre.products.push(product)
            return User.findById(data.owner).then(user => {
              user.products.push(product)
              return Promise.all([product.save(), genre.save(), user.save()] ).then(
                  ([product,category, user]) => {
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
        User.findById(product.owner).then(user => {
          user.products.pull(product._id)
          user.save()
        })

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
    newReview: {
      type: ReviewType,
      args: {
        title: {type: GraphQLString},
        content: {type: GraphQLString},
        rating: {type: GraphQLInt},
        product: {type: GraphQLID},
        reviewer: {type: GraphQLID} 
      },
      async resolve(parent, data, context) {
        // auth for frontend
        // const validUser = await AuthService.verifyUser( {token: context.token} )

        // if(validUser.loggedIn) {
          // data.reviewer = validUser.id;
          const review = new Review(data)
          return Product.findById(data.product).then(product => {
            product.reviews.push(review)
            return User.findById(data.reviewer).then(user => {
              user.reviews.push(review)
              return Promise.all([product.save(), review.save(), user.save()] ).then(
                  ([product,review, user]) => {
                    console.log(review)
                    return review
                  }
                )
              })
            }
          )
        // } else {
        //   throw new Error("You must be logged in to leave a review")
        // }
      }
    },
    deleteReview: {
      type: ReviewType,
      args: {
        id: {type: GraphQLID }
      },
      resolve(parent, {id}) {
        const review = Review.findById(id)
        User.findById(review.reviewer).then(user => {
          user.reviews.pull(review._id)
          user.save()
        })
        Product.findById(review.product).then(product => {
          product.reviews.pull(review._id)
          product.save()
        })

        return review.deleteOne()
      }
    },
    updateReview: {
      type: ReviewType,
      args: {
        _id: {type: GraphQLID},
        title: {type: GraphQLString},
        content: {type: GraphQLString},
        rating: {type: GraphQLFloat},
        
      },
      resolve(parentValue, {_id, title, content, rating}) {
        const updateObj = {};

        if(_id) updateObj._id = _id
        if(title) updateObj.title = title
        if(content) updateObj.content = content
        if(rating) updateObj.rating = rating
        

        return Review.findByIdAndUpdate(
          { _id: _id },
          { $set: updateObj },
          { new : true},
          (err, review) => {
            return review
          }
        );
      }
    }
  }//end of fields
});

module.exports = mutation;
