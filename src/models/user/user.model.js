const Users = require("./user.mongo");

async function getUser() {
  return await Users.find({}, { __v: 0 });
}

async function addUser(user) {
  try {
  } catch (error) {
    console.error(error);
  }
}

async function updateName() {}

async function updateProfileImage() {}

module.exports = {
  getUser,
  addUser,
  updateName,
  updateProfileImage,
};
