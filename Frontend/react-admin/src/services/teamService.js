import axios from "axios";

// Use the Render API URL for your deployed backend
const API_URL = "https://my-portfolio-l7kf.onrender.com/team";

// Fetch all teams
export const getTeams = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching teams:", error);
        return [];
    }
};

// Add a new team member
export const addTeamMember = async (newMember) => {
    try {
        const response = await axios.post(API_URL, newMember);
        return response.data;
    } catch (error) {
        console.error("Error adding team member:", error);
        throw error;
    }
};

// Update an existing team member
export const updateTeamMember = async (id, updatedMember) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedMember);
        return response.data;
    } catch (error) {
        console.error("Error updating team member:", error);
        throw error;
    }
};

// Delete a team member
export const deleteTeamMember = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting team member:", error);
        throw error;
    }
};
