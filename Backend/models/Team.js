import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    age: Number,
    phone: String,
    access: String,
});

const Team = mongoose.model("Team", teamSchema);

export default Team;
