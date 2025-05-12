/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography, useTheme, Divider, Link, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const AboutMe = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box m="20px">
      <Header title="ABOUT ME" subtitle="About myself and how to reach me." />
      <Box id="about-me">
  

      <Box
        sx={{
          backgroundImage: `url("/assets/terminal-bg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: isMobile ? "10px" : "30px",
        }}
      >
        <Box
          width="100%"
          maxWidth="1200px"
          py={isMobile ? "30px" : "50px"}
          px={isMobile ? "20px" : "50px"}
          borderRadius="20px"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            color: colors.grey[100],
            border: `1px solid ${colors.blueAccent[400]}`,
            boxShadow: `0 0 40px ${colors.primary[600]}`,
            backdropFilter: "blur(8px)",
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h2"}
            gutterBottom
            sx={{ fontWeight: 700, textAlign: isMobile ? "center" : "left" }}
          >
            👋 Hi, I'm Abdul Basith Maaz
          </Typography>

          <Typography
            variant={isMobile ? "body1" : "h5"}
            color={colors.greenAccent[400]}
            gutterBottom
            sx={{ fontWeight: 500, textAlign: isMobile ? "center" : "left" }}
          >
            Final Year Computer Science Engineering Student · Full Stack Developer · DevOps Enthusiast
          </Typography>

          <Divider sx={{ my: 3, borderColor: colors.blueAccent[700] }} />

          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: isMobile ? "1rem" : "1.15rem" }}
          >
            I'm a passionate developer skilled in crafting full-stack web applications using the MERN stack.
            My experience spans building admin dashboards, scalable APIs, and modern user interfaces using React.
            I also incorporate DevOps practices to ensure smooth deployment pipelines, version control, and efficient CI/CD flows.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{ fontSize: isMobile ? "1rem" : "1.15rem" }}
          >
            🚀 Currently enhancing this portfolio dashboard to showcase my GitHub activity, ongoing projects,
            and technical skillset — all in one place.
          </Typography>

          <Divider sx={{ my: 3, borderColor: colors.blueAccent[700] }} />

          <Typography
            variant={isMobile ? "h5" : "h4"}
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            📬 Contact Information
          </Typography>

          <Typography variant="body1" sx={{ mb: 1 }}>
            Email:{" "}
            <Link
              href="mailto:maazabdulbasith@gmail.com"
              underline="hover"
              sx={{ color: colors.greenAccent[300] }}
            >
              maazabdulbasith@gmail.com
            </Link>
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            LinkedIn:{" "}
            <Link
              href="https://linkedin.com/in/abdul-basith-maaz"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: colors.greenAccent[300] }}
            >
              linkedin.com/in/abdul-basith-maaz
            </Link>
          </Typography>
          <Typography variant="body1">
            GitHub:{" "}
            <Link
              href="https://github.com/maazabdulbasith"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{ color: colors.greenAccent[300] }}
            >
              github.com/maazabdulbasith
            </Link>
          </Typography>

          <Divider sx={{ my: 3, borderColor: colors.blueAccent[700] }} />

          <Typography
            variant={isMobile ? "h5" : "h4"}
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            🛠️ Tech Stack
          </Typography>

          <Typography variant="body1" sx={{ fontSize: isMobile ? "1rem" : "1.15rem" }}>
            React · JavaScript · Node.js · Express · MongoDB · MUI · HTML · CSS · Git · GitHub · Postman ·
            Vercel · Netlify
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, fontSize: isMobile ? "1rem" : "1.15rem" }}>
            DevOps Basics: Docker · Jenkins · Kubernetes · Git · Logstash
          </Typography>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default AboutMe;
