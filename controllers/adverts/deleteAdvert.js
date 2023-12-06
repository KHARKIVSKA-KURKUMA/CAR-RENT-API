const { Advert } = require(`../../models/adverts`);
const { errorMessage } = require(`../../helpers`);

const deleteAdvert = async (req, res) => {
  const { advertId } = req.params;
  const result = await Advert.findByIdAndRemove(advertId);
  if (!result) throw errorMessage({ status: 404 });
  res.json({ message: "Advert deleted" });
};

module.exports = deleteAdvert;
