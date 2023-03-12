import mongoose from "mongoose";

const UgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cutOffPoint: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Ug", UgSchema);
