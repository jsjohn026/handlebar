const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  
  content: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "users"
  },
  date: {
    type: Date,
    default: Date.now
  },
  product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "products"
  },
  rating: {
      type: Number,
      require: true
  }
});


module.exports = Product = mongoose.model("reviews", ReviewSchema);