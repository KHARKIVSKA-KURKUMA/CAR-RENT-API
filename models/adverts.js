const { Schema, model } = require("mongoose");

const advertSchema = new Schema(
  {
    year: {
      type: Number,
      required: [true, "Set year for car"],
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
    rentalInfo: {
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
    },
  },
  { versionKey: false, timestamps: true }
);

const Advert = model("advert", advertSchema);

module.exports = {
  Advert,
};
