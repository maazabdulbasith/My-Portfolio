import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: String, enum: ["Planned", "Ongoing", "Completed"], default: "Planned" },
    techStack: { type: String },
    link: { type: String }, // Optional project/demo link
    description: { type: String },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
