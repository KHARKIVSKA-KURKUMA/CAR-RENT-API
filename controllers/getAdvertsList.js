const { Advert } = require(`../models/adverts`);

const getContactsList = async (_, res) => {
  const result = await Advert.find({});
  res.json(result);
};

module.exports = getContactsList;
