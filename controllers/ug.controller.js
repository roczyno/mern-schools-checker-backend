import Ug from "../models/ug.models.js";

export const getAll = async (req, res) => {
  try {
    const ug = await Ug.find();
    res.status(200).json(ug);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const create = async (req, res) => {
  const newCourse = new Ug({
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
