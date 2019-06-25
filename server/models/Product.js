const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    // validate: [
    //   userExistsValidator,
    //   "The user must exist."
    // ],
    required: true,
    ref: "users"
  },
  date: {
    type: Date,
    default: Date.now
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: "genres"
  },
  image_url:{
    type: String
  }
});

ProductSchema.statics.updateProductGenre = (productId, genreId) => {
  const Product = mongoose.model('products')
  const Genre = mongoose.model('genres')

  return Product.findById(productId).then(product => {
    // if the product already had a category
    
    if (product.genre && product.genre != genreId) {
      // find the old category and remove this product from it's products
      Genre.findById(product.genre).then(oldGenre => {
        oldGenre.products.pull(product)
        return oldGenre.save()
      })
    }
    //  find the Category and push this product in, as well as set this product's category
    return Genre.findById(genreId).then(genre => {
      product.genre = genre
      genre.products.push(product)

      return Promise.all([product.save(), genre.save()]).then(
        ([product, genre]) => product
      )
    })
  })
}


module.exports = Product = mongoose.model("products", ProductSchema);