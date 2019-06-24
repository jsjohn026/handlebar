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
  owner_id: {
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

module.exports = Product = mongoose.model("products", ProductSchema);