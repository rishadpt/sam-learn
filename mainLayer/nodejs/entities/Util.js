const crypto = require("crypto");

const generateUid = () => {
  return crypto.randomBytes(16).toString("hex");
};

module.exports = {
  generateUid,
};
