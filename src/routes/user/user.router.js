const { httpGetUser, httpUpdateName } = require("./user.controller");

const userRouter = require("express").Router();

userRouter.route("/:email").get(httpGetUser);
userRouter.route("/name/:id").get(httpUpdateName);

module.exports = userRouter;
