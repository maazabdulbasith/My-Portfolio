import express from "express";
import Team from "../models/Team.js";

const router = express.Router();

// GET all team members
router.get("/", async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new team member
router.post("/", async (req, res) => {
    try {
        const newTeam = new Team(req.body);
        await newTeam.save();
        const savedTeam = await newTeam.save();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @route PUT /api/teams/:id
router.put("/:id", async (req, res) => {
    try {
        const updatedMember = await Team.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // return the updated document
        );

        if (!updatedMember) {
            return res.status(404).json({ message: "Member not found" });
        }

        res.status(200).json(updatedMember);
    } catch (error) {
        res.status(500).json({ message: "Error updating member", error });
    }
});

// DELETE a team member by MongoDB _id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTeam = await Team.findByIdAndDelete(id); // ✅ _id insteaf of id METHOD

        if (!deletedTeam) {
            return res.status(404).json({ message: "Team member not found" });
        }

        res.status(200).json({ message: "Team member deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
