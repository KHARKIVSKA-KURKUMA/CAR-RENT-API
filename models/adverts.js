const Joi = require("joi");
const { Schema, model } = require("mongoose");

const addressRegExp = /^[\w\s]+,\s[\w\s]+,\s[\w\s]+$/;

const advertSchema = new Schema(
  {
    year: {
      type: Number,
      required: [true, "Set year for car"],
      validate: {
        validator: function (value) {
          return value <= new Date().getFullYear();
        },
        message: "Year cannot be greater than the current year",
      },
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: [true, "Set model for car"],
    },
    type: {
      type: String,
      required: [true, "Set type for car"],
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fuelConsumption: {
      type: String,
      required: true,
    },
    engineSize: {
      type: String,
      required: true,
    },
    accessories: {
      type: Array,
      required: true,
    },
    functionalities: {
      type: Array,
      required: true,
    },
    rentalPrice: {
      type: String,
      required: true,
    },
    rentalCompany: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      match: addressRegExp,
      required: true,
    },
    rentalConditions: {
      type: String,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Advert = model("advert", advertSchema);

const advertAddSchema = Joi.object({
  year: Joi.number().required(),
  make: Joi.string().required(),
  model: Joi.string().required(),
  type: Joi.string().required(),
  img: Joi.string().required(),
  description: Joi.string().required(),
  fuelConsumption: Joi.string().required(),
  engineSize: Joi.string().required(),
  accessories: Joi.array().items(Joi.string()).required(),
  functionalities: Joi.array().items(Joi.string()).required(),
  rentalPrice: Joi.string().required(),
  rentalCompany: Joi.string().required(),
  address: Joi.string().required(),
  rentalConditions: Joi.string().required(),
  mileage: Joi.number().required(),
});

const schemas = {
  advertAdd: advertAddSchema,
};

module.exports = {
  Advert,
  schemas,
};
