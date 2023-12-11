const getCurrent = async (req, res) => {
  const { _id, name, subscription, email } = req.user;
  res.json({
    _id,
    name,
    email,
    subscription,
  });
};

module.exports = getCurrent;
