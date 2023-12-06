const { Advert, schemas } = require(`../models/adverts`);
const { errorMessage } = require(`../helpers`);

const addAdvert = async (req, res) => {
  const { error } = schemas.advertAdd.validate(req.body);
  if (error) {
    const label = error.details[0].context.label;
    if (error.details[0].type === "any.required") {
      throw errorMessage({
        status: 400,
        message: `missing required ${label} field`,
      });
    } else {
      throw errorMessage({
        status: 400,
        message: `${error.details[0].message}`,
      });
    }
  } else {
    const result = await Advert.create(req.body);
    res.status(201).json(result);
  }
};

module.exports = addAdvert;
