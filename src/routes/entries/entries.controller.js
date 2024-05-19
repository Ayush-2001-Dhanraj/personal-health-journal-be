const {
  getAllEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry,
  getAttachment,
} = require("../../models/entries/entries.model");
const { getUserByID } = require("../../models/user/user.model");
const isValidDate = require("../../util/isValidDate");
const { upload } = require("../../util/cloudinary");

async function httpGetAllEntries(req, res) {
  const { userID } = req.params;
  return res.status(200).json(await getAllEntries(userID));
}

async function httpGetEntry(req, res) {
  const { entryID } = req.params;

  const entry = await getEntry(entryID);

  if (entry) return res.status(200).json(entry);

  return res.status(200).json({ err: `No entry found with id : ${entryID}` });
}

async function httpCreateEntry(req, res) {
  const { userID } = req.params;

  const user = await getUserByID(userID);

  if (!user)
    return res.status(400).json({ err: `No user found with email ${userID}` });

  const {
    title,
    type,
    subtitle,
    description,
    eventDate,
    groups,
    hospitalName,
    doctorName,
    department,
    isRecurring,
    repeatFrequency,
    recurringStartDate,
    isTestAwaited,
    testResultDate,
  } = req.body;

  if (!title || !eventDate)
    return res
      .status(400)
      .json({ err: "Required properties missing: title and eventDate" });

  if (!isValidDate(eventDate))
    return res.status(400).json({ err: `Invalid Date ${eventDate}` });

  if (isRecurring && (!recurringStartDate || !repeatFrequency))
    return res.status(400).json({
      err: "For Recurring Events Frequency and start date is required",
    });

  const attachment = req.files?.attachment;

  let file = "";

  if (attachment) {
    const result = await upload(attachment.tempFilePath);
    if (result) file = result.url;
  }

  const resp = await createEntry({
    title,
    type,
    subtitle,
    description,
    eventDate,
    file,
    groups,
    user: user._id,
    hospitalName,
    doctorName,
    department,
    isRecurring: !!isRecurring,
    repeatFrequency,
    recurringStartDate,
    isTestAwaited,
    testResultDate,
  });

  if (resp.err) return res.status(400).json(resp);

  return res.status(201).json(resp);
}

async function httpDeleteEntry(req, res) {
  const { entryID } = req.params;

  const deletedEntry = await deleteEntry(entryID);

  if (!deletedEntry)
    return res.status(404).json({ err: `Entry not found with id: ${entryID}` });

  return res.status(200).json(deletedEntry);
}

async function httpUpdateEntry(req, res) {
  const { entryID } = req.params;

  const updatedDocument = await updateEntry(entryID, req.body);

  if (!updatedDocument)
    return res
      .status(400)
      .json({ err: `Entry not found with id : ${entryID}` });

  return res.status(200).json(updatedDocument);
}

async function httpGetAttachment(req, res) {
  const { entryID } = req.params;

  const attachment = await getAttachment(entryID);

  if (!attachment)
    return res.status(400).json({ err: `No entry found with ID ${entryID}` });

  return res.status(200).json(attachment);
}

module.exports = {
  httpGetAllEntries,
  httpGetEntry,
  httpCreateEntry,
  httpDeleteEntry,
  httpUpdateEntry,
  httpGetAttachment,
};
