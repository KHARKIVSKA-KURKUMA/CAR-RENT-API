const { Advert } = require(`../../models/adverts`);
const { errorMessage } = require(`../../helpers`);

const getUserAdverts = async (req, res) => {
  console.log(req.user);
  const { _id: owner } = req.user;
  const filter = { owner };
  try {
    const result = await Advert.find(filter, "-createdAt -updatedAt").populate(
      "owner",
      "name email "
    );
    res.json(result);
  } catch (error) {
    throw errorMessage({
      status: 400,
      message: "An unexpected error occurred while getting the adverts list",
    });
  }
};

module.exports = getUserAdverts;
