import mongoose from "mongoose";

const KnustSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cutOffPoints: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Knust", KnustSchema);
