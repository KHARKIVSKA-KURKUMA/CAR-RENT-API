const { User } = require(`../../models/user`);

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });
  res.json({ message: "User logout successful" });
};

module.exports = logout;
