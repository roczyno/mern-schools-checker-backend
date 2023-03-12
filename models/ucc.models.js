import mongoose from "mongoose";

const UccSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cutOffPoint: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Ucc", UccSchema);
