import mongoose from "mongoose";

const UgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cutOffPoints: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Ug", UgSchema);
