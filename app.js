// importing required packages
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const port = process.env.PORT || 3000;
// initializing express
const app = express();
app.use(express.json());

// using body parser to parse over the request body
app.use(bodyParser.urlencoded({ extended: true }));

// using routes
app.use("/products", require("./routes/products"));

//swagger configuration
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// starting the server
app.listen(port, function () {
  console.log("API is live on http://localhost:3000/products");
});
