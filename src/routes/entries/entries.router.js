const {
  httpGetAllEntries,
  httpGetEntry,
  httpCreateEntry,
  httpDeleteEntry,
  httpUpdateEntry,
} = require("./entries.controller");

const entriesRouter = require("express").Router();

entriesRouter.route("/:userID").get(httpGetAllEntries).post(httpCreateEntry);
entriesRouter
  .route("/entry/:entryID")
  .get(httpGetEntry)
  .delete(httpDeleteEntry)
  .patch(httpUpdateEntry);

module.exports = entriesRouter;
