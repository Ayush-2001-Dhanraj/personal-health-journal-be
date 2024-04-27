const Entries = require("./entries.mongo");

async function getAllEntries(userID) {
  return await Entries.find({ user: userID }, { __v: 0 }).sort({
    eventDate: "desc",
  });
}

async function getEntry(_id) {
  return await Entries.findOne({ _id }, { __v: 0 });
}

async function createEntry(entry) {
  try {
    const newEntry = new Entries(entry);
    return await newEntry.save();
  } catch (error) {
    console.log(error);
  }
}

async function deleteEntry(_id) {
  return await Entries.findOneAndDelete({ _id });
}

async function updateEntry(_id, data) {
  return await Entries.findOneAndUpdate({ _id }, data, { new: true });
}

module.exports = {
  getAllEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry,
};
