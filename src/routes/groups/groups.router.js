const {
  httpGetAllGroups,
  httpAddNewGroup,
  httpGetGroup,
} = require("./groups.controller");

const groupsRouter = require("express").Router();

groupsRouter.route("/").get(httpGetAllGroups).post(httpAddNewGroup);
groupsRouter.route("/:id").get(httpGetGroup);

module.exports = groupsRouter;
