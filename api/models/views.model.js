import mongoose from "mongoose";

const viewsSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, // Corrected here
      ref: "User" 
    },
    post: { 
      type: mongoose.Schema.Types.ObjectId, // Corrected here
      ref: "Post" 
    },
  },
  { timestamps: true }
);

const Views = mongoose.model("Views", viewsSchema);

export default Views;
