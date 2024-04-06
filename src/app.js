const express = require("express");

const apiV1 = require("./routes/apiV1");

const app = express();

app.use(express.json());

// routes
app.use("/v1", apiV1);

module.exports = app;
