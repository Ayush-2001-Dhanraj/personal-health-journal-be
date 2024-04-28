const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");

const apiV1 = require("./routes/apiV1");

const app = express();

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(cors());
app.use(express.json());

// routes
app.use("/v1", ClerkExpressRequireAuth({}), apiV1);
// app.use("/v1", apiV1);

module.exports = app;
