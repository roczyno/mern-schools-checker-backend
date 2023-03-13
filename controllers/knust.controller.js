import Knust from "../models/knust.models.js";

export const getAll = async (req, res) => {
  try {
    const knust = await Knust.find();
    res.status(200).json(knust);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const create = async (req, res) => {
  const newCourse = new Knust({
    name: req.body.name,
    cutOffPoint: req.body.cutOffPoint,
  });
  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCourse);
  } catch (error) {
    res.status(500).json(error);
  }
};
