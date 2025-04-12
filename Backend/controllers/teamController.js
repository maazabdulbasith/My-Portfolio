import Team from "../models/Team.js";

// GET all team members
export const getTeamMembers = async (req, res) => {
    try {
        const team = await Team.find();
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteTeam = async (req, res) => {
    const { id } = req.params;
    const team = await Team.findById(id);
    if (!team) {
        return res.status(404).json({ message: "Team member not found" });
    }
    await team.deleteOne();
    res.json({ message: "Team member deleted successfully" });
};
