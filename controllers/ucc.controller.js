import Ucc from "../models/ucc.models.js";

export const getAll = async (req, res) => {
  try {
    const ucc = await Ucc.find();
    res.status(200).json(ucc);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const create = async (req, res) => {
  const newCourse = new Ucc({
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
