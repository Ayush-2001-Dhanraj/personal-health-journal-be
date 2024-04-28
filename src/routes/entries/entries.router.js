const {
  httpGetAllEntries,
  httpGetEntry,
  httpCreateEntry,
  httpDeleteEntry,
  httpUpdateEntry,
  httpGetAttachment,
} = require("./entries.controller");

const entriesRouter = require("express").Router();

entriesRouter.route("/:userID").get(httpGetAllEntries).post(httpCreateEntry);
entriesRouter
  .route("/entry/:entryID")
  .get(httpGetEntry)
  .delete(httpDeleteEntry)
  .patch(httpUpdateEntry);
entriesRouter.route("/entry/attachment/:entryID").get(httpGetAttachment);

module.exports = entriesRouter;
