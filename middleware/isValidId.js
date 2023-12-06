const { isValidObjectId } = require("mongoose");
const { errorMessage } = require(`../helpers`);

const isValidId = (req, res, next) => {
  const { advertId } = req.params;
  if (!isValidObjectId(advertId)) {
    next(errorMessage({ status: 404, message: "Not found" }));
  }
  next();
};

module.exports = isValidId;
