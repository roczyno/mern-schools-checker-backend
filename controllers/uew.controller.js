import Uew from "../models/uew.models.js";

export const getAll = async (req, res) => {
  try {
    const uew = await Uew.find();
    res.status(200).json(Uew);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const create = async (req, res) => {
  const newCourse = new Uew({
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
