const {
  httpGetUser,
  httpUpdateName,
  httpUpdateProfileImg,
} = require("./user.controller");

const userRouter = require("express").Router();

userRouter.route("/:email").get(httpGetUser);
userRouter.route("/name/:id").get(httpUpdateName);
userRouter.route("/avatar/:id").post(httpUpdateProfileImg);

module.exports = userRouter;
