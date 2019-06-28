const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 32
  },
  // basket: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "products"
  //   }
  // ],
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "products"
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: "reviews"
  }]
});

module.exports = mongoose.model("users", UserSchema);
