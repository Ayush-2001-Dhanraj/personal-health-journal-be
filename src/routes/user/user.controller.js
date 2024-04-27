const {
  getUser,
  getUserByID,
  addUser,
  updateName,
  updateProfileImage,
} = require("../../models/user/user.model");
const clerkClient = require("@clerk/clerk-sdk-node");
const { upload } = require("../../util/cloudinary");

async function httpGetUser(req, res) {
  // check if user already exists
  const { email } = req.params;

  const user = await getUser(email);

  if (user) {
    return res.status(200).json(user);
  }

  // create user if not exists
  const { firstName, lastName, profileImageUrl } =
    await clerkClient.users.getUser(req.auth.userId);

  const newUser = await addUser({
    name: `${firstName} ${lastName}`,
    email,
    profileImg: profileImageUrl,
  });

  return res.status(201).json(newUser);
}

async function httpUpdateName(req, res) {
  const { id } = req.params;

  const user = await getUserByID(id);

  if (!user) {
    return res.status(404).json({ err: "User not found" });
  }

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ err: "Name property missing!!" });
  }

  const updatedUser = await updateName(id, name);

  return res.status(200).json(updatedUser);
}

async function httpUpdateProfileImg(req, res) {
  const { id } = req.params;

  const user = await getUserByID(id);

  if (!user) return res.status(404).json({ err: "User not found" });

  const avatar = req.files?.avatar;

  if (!avatar) return res.status(404).json({ err: "Missing avatar" });

  const result = await upload(avatar.tempFilePath);

  if (!result) return res.status(404).json({ err: "File could't be uploaded" });

  const updatedUser = await updateProfileImage(id, result.url);

  return res.status(200).json(updatedUser);
}

module.exports = { httpGetUser, httpUpdateName, httpUpdateProfileImg };
