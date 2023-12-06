const { Advert } = require(`../../models/adverts`);

const getAdvertsList = async (_, res) => {
  const result = await Advert.find({});
  res.json(result);
};

module.exports = getAdvertsList;
