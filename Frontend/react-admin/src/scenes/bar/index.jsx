import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { techStackData } from "../../data/techStackData";  // Import your tech stack data

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart demonstrating the Technologies I like" />
      <Box height="75vh">
        <BarChart data={techStackData} />  {/* Pass techStackData to BarChart component */}
      </Box>
    </Box>
  );
};

export default Bar;
