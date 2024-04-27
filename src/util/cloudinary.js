const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

function upload(filePath, folder) {
  return cloudinary.uploader.upload(
    filePath,
    { folder: folder || "" },
    function (err, result) {
      if (err) return err;
      return result;
    }
  );
}

module.exports = { cloudinary, upload };
