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
  }]
});

module.exports = Product = mongoose.model("genres", GenreSchema);