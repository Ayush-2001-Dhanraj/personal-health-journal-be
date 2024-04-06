const apiV1 = require("express").Router();

const groupsRouter = require("./groups/groups.router");

apiV1.use("/groups", groupsRouter);

module.exports = apiV1;
