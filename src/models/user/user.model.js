const Users = require("./user.mongo");

async function getUser(email) {
  return await Users.findOne({ email }, { __v: 0 });
}

async function getUserByID(id) {
  return await Users.findOne({ _id: id }, { __v: 0 });
}

async function addUser(user) {
  try {
    const newUser = new Users(user);
    return await newUser.save();
  } catch (error) {
    console.error(error);
  }
}

async function updateName(_id, name) {
  return await Users.findOneAndUpdate({ _id }, { name }, { new: true });
}

async function updateLastUpdateDate(_id, lastUpdateDate) {
  return await Users.findOneAndUpdate(
    { _id },
    { lastUpdate: lastUpdateDate },
    { new: true }
  );
}

async function updateProfileImage(id, profileImg) {
  return await Users.findOneAndUpdate(
    { _id: id },
    { $set: { profileImg, lastUpdate: Date.now() } },
    { new: true }
  );
}

module.exports = {
  getUser,
  getUserByID,
  addUser,
  updateName,
  updateLastUpdateDate,
  updateProfileImage,
};
