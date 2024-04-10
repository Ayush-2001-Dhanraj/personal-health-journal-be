const {
  httpGetAllEntries,
  httpGetEntry,
  httpCreateEntry,
  httpDeleteEntry,
  httpUpdateEntry,
} = require("./entries.controller");

const entriesRouter = require("express").Router();

entriesRouter.route("/").get(httpGetAllEntries).post(httpCreateEntry);
entriesRouter
  .route("/:id")
  .get(httpGetEntry)
  .delete(httpDeleteEntry)
  .patch(httpUpdateEntry);

module.exports = entriesRouter;
