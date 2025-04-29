import axios from "axios";

// Define the base URL for the API (change to your render backend URL)
const BASE_URL = "https://my-portfolio-l7kf.onrender.com/api/projects";

// Fetch all projects
export const getProjects = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    }
};

// Create a new project
export const createProject = async (projectData) => {
    try {
        const response = await axios.post(BASE_URL, projectData);
        return response.data;
    } catch (error) {
        console.error("Error creating project:", error);
        throw error;
    }
};

// Update an existing project
export const updateProject = async (projectId, updatedData) => {
    try {
        const response = await axios.put(
            `${BASE_URL}/${projectId}`,
            updatedData
        );
        return response.data;
    } catch (error) {
        console.error("Error updating project:", error);
        throw error;
    }
};

// Delete a project
export const deleteProject = async (projectId) => {
    try {
        await axios.delete(`${BASE_URL}/${projectId}`);
        return "Project deleted successfully!";
    } catch (error) {
        console.error("Error deleting project:", error);
        throw error;
    }
};
