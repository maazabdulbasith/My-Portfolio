import {
  Box,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import GithubCalendar from "../../components/GithubCalendar";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import CodeIcon from "@mui/icons-material/Code";
import FolderIcon from "@mui/icons-material/Folder";
import BuildIcon from "@mui/icons-material/Build";
import GitHubIcon from "@mui/icons-material/GitHub";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/Statbox";
import ProgressCircle from "../../components/ProgressCircle";

const fetchGitHubRepos = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/maazabdulbasith/repos');
    return response.data.map(repo => ({
      name: repo.name,
      tech: repo.language || "Not specified",
      date: new Date(repo.created_at).toLocaleDateString(),
      link: repo.html_url,
      stars: repo.stargazers_count
    }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

const Dashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      const data = await fetchGitHubRepos();
      setRepos(data);
    };

    getRepos();
  }, []);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PORTFOLIO DASHBOARD" subtitle="Welcome to my portfolio overview" />

        <Box>
          <Button
            onClick={() => navigate("/aboutme")}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            About Me
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 - Developer Stats */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="25+"
            subtitle="GitHub Repositories"
            progress="0.9"
            increase="+5 this month"
            icon={
              <GitHubIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12"
            subtitle="Completed Projects"
            progress="0.7"
            increase="+2 recent"
            icon={
              <FolderIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="9"
            subtitle="Tech Stacks Mastered"
            progress="0.5"
            increase="+1 learned"
            icon={
              <BuildIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="365+"
            subtitle="Days of GitHub Contributions"
            progress="1"
            increase="🔥 Streak active"
            icon={
              <CodeIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* GITHUB REPOS SECTION */}
<Box
  gridColumn="span 12"
  gridRow="span 2"
  backgroundColor={colors.primary[400]}
  p="30px"
  display="flex"
  flexDirection="column"
  justifyContent="flex-start"
  overflow="auto"
>
  <Typography variant="h5" fontWeight="600" mb="15px">
    GitHub Repositories
  </Typography>
  <Box display="flex" flexDirection="column" gap="10px" maxHeight="300px" overflow="auto">
    {repos.length === 0 ? (
      <Typography color={colors.grey[100]}>
        No repositories available
      </Typography>
    ) : (
      repos.map((repo, i) => (
        <Box
          key={`${repo.name}-${i}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="10px"
          backgroundColor={colors.primary[500]}
          borderRadius="4px"
        >
          <Typography color={colors.grey[100]}>
            {repo.name}
          </Typography>
          <Box
            backgroundColor={colors.greenAccent[500]}
            p="5px 10px"
            borderRadius="4px"
          >
            <a
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: colors.grey[100],
                textDecoration: 'none',
              }}
            >
              GitHub
            </a>
          </Box>
        </Box>
      ))
    )}
  </Box>
</Box>

  {/* ROW 2 - Heatmap & LineChart Side by Side */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          display="flex"
          gap="20px"
        >
          {/* Heatmap Box */}
          <Box
            flex="1"
            backgroundColor={colors.primary[400]}
            p="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6" fontWeight="600" mb="10px">
              GitHub Contributions
            </Typography>
            <GithubCalendar />
          </Box>

          {/* Line Chart Box */}
          <Box
            flex="1"
            backgroundColor={colors.primary[400]}
            p="20px"
          >
            <Typography variant="h6" fontWeight="600" mb="10px">
              Commit Activity
            </Typography>
            <Box height="200px">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Box>

        {/* Latest Projects Section */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Latest Projects
            </Typography>
          </Box>

          {/* gotta replace these with real project entries from za backend */}
          {[ 
            { name: "Admin Dashboard", tech: "React, MUI", date: "Apr 2025", link: "Live" },
            { name: "ChatterBox App", tech: "MERN", date: "Mar 2025", link: "GitHub" },
            { name: "Flight Booking", tech: "Java, JS, MySQL", date: "Jan 2025", link: "GitHub" },
          ].map((project, i) => (
            <Box
              key={`${project.name}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {project.name}
                </Typography>
                <Typography color={colors.grey[100]}>{project.tech}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{project.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {project.link}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 - Portfolio Extras */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Portfolio Completion
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="125" />
            <Typography
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
              variant="h6"
            >
              90% complete
            </Typography>
          </Box>
        </Box>

        {/* ROW 4 - Additional Charts */}
        <Box
  gridColumn="span 8"
  gridRow="span 2"
  backgroundColor={colors.primary[500]}
  display="flex"
  gap="20px"
>
  {/* First Box - Geography */}
  
  <Box
    flex="1"
    p="20px"
    backgroundColor={colors.primary[400]}
    borderRadius="8px"
    display="flex"
    flexDirection="column"
  >
    <Typography variant="h6" fontWeight="600" mb="10px">
      Geography Distribution
    </Typography>
    <Box height="200px" flex="1">
      <GeographyChart isDashboard={true} />
    </Box>
  </Box>

  {/* Second Box - Activity */}
<Box
  flex="1"
  p="20px"
  backgroundColor={colors.primary[400]}
  borderRadius="8px"
  display="flex"
  flexDirection="column"
>
  <Typography variant="h6" fontWeight="600" mb="10px">
    Recent Activity
  </Typography>
  <Box height="200px" flex="1" display="flex" justifyContent="center">
    <BarChart isDashboard={true} />
  </Box>
</Box>

</Box>

      </Box>
    </Box>
  );
};


export default Dashboard;
