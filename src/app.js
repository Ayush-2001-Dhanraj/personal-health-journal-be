const express = require("express");
const cors = require("cors");
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

const apiV1 = require("./routes/apiV1");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/v1", ClerkExpressWithAuth(), apiV1);

module.exports = app;
