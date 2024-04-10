const apiV1 = require("express").Router();

const groupsRouter = require("./groups/groups.router");
const userRouter = require("./user/user.router");
const entriesRouter = require("./entries/entries.router");

apiV1.use("/groups", groupsRouter);
apiV1.use("/user", userRouter);
apiV1.use("/entries", entriesRouter);

module.exports = apiV1;
