import axios from "axios";

const API_URL = "https://my-portfolio-l7kf.onrender.com/team";

export const getTeams = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching teams:", error);
        return [];
    }
};
