const { Advert, schemas } = require(`../models/adverts`);
const { errorMessage } = require(`../helpers`);

const updateAdvert = async (req, res) => {
  const { error } = schemas.advertAdd.validate(req.body);
  if (error) {
    const length = Object.keys(error._original).length;
    const label = error.details[0].context.label;
    if (length === 0) {
      throw errorMessage({ status: 400, message: "missing fields" });
    }
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
  }
  const { advertId } = req.params;
  const result = await Advert.findByIdAndUpdate(advertId, req.body, {
    new: true,
  });
  if (!result) throw errorMessage({ status: 404 });
  res.json(result);
};

module.exports = updateAdvert;
