const {
  getAllEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../../models/entries/entries.model");
const isValidDate = require("../../util/isValidDate");

async function httpGetAllEntries(req, res) {
  return res.status(200).json(await getAllEntries());
}

async function httpGetEntry(req, res) {
  const { id } = req.params;

  const entry = await getEntry(id);

  if (entry) return res.status(200).json(entry);

  return res.status(200).json({ err: `No entry found with id : ${id}` });
}

async function httpCreateEntry(req, res) {
  const { title, type, subtitle, description, eventDate, files, groups } =
    req.body;

  if (!title || !eventDate)
    return res
      .status(400)
      .json({ err: "Required properties missing: title and eventDate" });

  if (!isValidDate(eventDate))
    return res.status(400).json({ err: `Invalid Date ${eventDate}` });

  const resp = await createEntry({
    title,
    type,
    subtitle,
    description,
    eventDate,
    files,
    groups,
  });

  return res.status(201).json(resp);
}

async function httpDeleteEntry(req, res) {
  const { id } = req.params;

  const deletedEntry = await deleteEntry(id);

  if (!deletedEntry)
    return res.status(404).json({ err: `Entry not found with id: ${id}` });

  return res.status(200).json(deletedEntry);
}

async function httpUpdateEntry(req, res) {
  const { id } = req.params;

  const updatedDocument = await updateEntry(id, req.body);

  if (!updatedDocument)
    return res.status(400).json({ err: `Entry not found with id : ${id}` });

  return res.status(200).json(updatedDocument);
}

module.exports = {
  httpGetAllEntries,
  httpGetEntry,
  httpCreateEntry,
  httpDeleteEntry,
  httpUpdateEntry,
};
