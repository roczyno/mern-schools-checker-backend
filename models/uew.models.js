import mongoose from "mongoose";

const UewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cutOffPoint: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Uew", UewSchema);
