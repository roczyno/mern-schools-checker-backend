import mongoose from "mongoose";

const UewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cutOffPoints: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Uew", UewSchema);
