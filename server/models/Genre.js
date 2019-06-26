const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const GenreSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  products: [{
      type: Schema.Types.ObjectId,
      ref: 'products'
  }],
  image_url: { type: String}
});

module.exports = Product = mongoose.model("genres", GenreSchema);