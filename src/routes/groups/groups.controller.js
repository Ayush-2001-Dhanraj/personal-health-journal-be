const {
  getAllGroups,
  addNewGroup,
  getGroup,
} = require("../../models/groups/groups.model");

async function httpGetAllGroups(req, res) {
  return res.status(200).json(await getAllGroups());
}

async function httpAddNewGroup(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ err: "Name property missing!!!!" });
  }

  const newGroup = await addNewGroup(name);
  return res.status(201).json(newGroup);
}

async function httpGetGroup(req, res) {
  const groupID = req.params.id;

  const group = await getGroup(groupID);

  if (!group) {
    res.status(400).json({ err: `Group with ID: ${groupID} not found` });
  }

  return res.status(200).json(group);
}

module.exports = {
  httpGetAllGroups,
  httpAddNewGroup,
  httpGetGroup,
};
