// Importing packages/libraries
const express = require('express');

// Importing other file modules
const productRouter = require("./routes/productRouter");

const app = express();

app.use("/api/products", productRouter);

module.exports = app;