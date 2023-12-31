/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 5,
    maxLength: 100,
    required: true,
  },
  brand: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true,
  },
  model: {
    type: String,
    minLength: 5,
    maxLength: 100,
    required: true,
  },
  description: {
    type: String,
    minLength: 5,
    maxLength: 500,
    required: true,
  },
  price: {
    type: Number,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not a valid integer.",
    },
    min: 1,
    max: 1000,
    required: true,
  },
  availability: {
    type: String,
    minLength: 5,
    maxLength: 100,
    required: true,
  },
  rating: {
    type: Number,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not a valid integer.",
    },
    min: 1,
    max: 5,
    required: true,
  },
  image_url: {
    type: String,
    minLength: 5,
    maxLength: 400,
    required: true,
  },
});

itemSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default itemSchema;
