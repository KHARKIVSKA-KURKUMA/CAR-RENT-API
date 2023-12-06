const { Advert } = require(`../models/adverts`);
const { errorMessage } = require(`../helpers`);

const getAdvertById = async (req, res) => {
  const { advertId } = req.params;
  const result = await Advert.findById(advertId);
  if (!result) {
    throw errorMessage({ status: 404 });
  }
  res.json(result);
};

module.exports = getAdvertById;
