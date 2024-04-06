const Groups = require("./groups.mongo");

async function getAllGroups() {
  return await Groups.find({}, { _id: 0, __v: 0 });
}

async function addNewGroup(name) {
  try {
    await Groups.findOneAndUpdate({ name }, { name }, { upsert: true });
  } catch (error) {
    console.error(error);
  }
}

async function getGroup(id) {
  return await Groups.findOne({ _id: id }, { _id: 0, __v: 0 });
}

module.exports = {
  getAllGroups,
  addNewGroup,
  getGroup,
};
