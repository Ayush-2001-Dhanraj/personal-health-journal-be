const apiV1 = require("express").Router();

const groupsRouter = require("./groups/groups.router");
const userRouter = require("./user/user.router");

apiV1.use("/groups", groupsRouter);
apiV1.use("/user", userRouter);

module.exports = apiV1;
