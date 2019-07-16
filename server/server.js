const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("../config/keys.js").mongoURI;
// const db = process.env.MONGO_URI;
const expressGraphQL = require("express-graphql");
const models = require('./models');
const schema = require("./schema/schema");
const cors = require("cors");
const path = require("path");

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const app = express();
if (!db) {
  throw new Error("You must provide a string to connect to MongoDB Atlas");
}

mongoose
  // The configuration object we pass into connect()
  // prevents an error being thrown by the latest release of MongoDB's driver
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// We use body-parser in order to be able to parse
// incoming requests in middleware before they are handled
app.use(bodyParser.json());

app.use(cors());

app.use(
  "/graphql",
  expressGraphQL(req => {
    return {
      schema,
      context: {
        token: req.headers.authorization
      },
      graphiql: true
    };
  })
);

module.exports = app;