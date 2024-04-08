const {
  getAllGroups,
  addNewGroup,
  getGroup,
} = require("../../models/groups/groups.model");
const ObjectId = require("mongoose").Types.ObjectId;

async function httpGetAllGroups(req, res) {
  return res.status(200).json(await getAllGroups());
}

async function httpAddNewGroup(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ err: "Name property missing!!!!" });
  }

  await addNewGroup(name);
  return res.status(201).json({ name });
}

async function httpGetGroup(req, res) {
  const groupID = req.params.id;

  if (!ObjectId.isValid(groupID)) {
    return res.status(404).json({ err: "Invalid ID, no group found." });
  }

  const group = await getGroup(groupID);

  if (!group) {
    return res.status(400).json({ err: `Group with ID: ${groupID} not found` });
  }

  return res.status(200).json(group);
}

module.exports = {
  httpGetAllGroups,
  httpAddNewGroup,
  httpGetGroup,
};
