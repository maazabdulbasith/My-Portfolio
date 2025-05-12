/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo } from "react";
import { Box, Typography, Card, CardContent, Link, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { tokens } from "../../theme";

const GitHubRepos = ({ username }) => {
  const theme = useTheme();
  const colors = useMemo(() => tokens(theme.palette.mode), [theme.palette.mode]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error("Error fetching repos:", err);
      }
    };

    fetchRepos();
  }, [username]);

  // Optional: Wait for theme colors to load
  if (!colors?.greenAccent || !colors?.primary || !colors?.yellowAccent) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h4" mb="15px" color={colors.greenAccent[400]}>
        Top GitHub Repositories
      </Typography>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {repos.map((repo) => (
          <Card
            key={repo.id}
            sx={{
              backgroundColor: colors.primary[400],
              color: colors.grey[100],
              width: "calc(50% - 15px)",
              minWidth: "280px",
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="600">
                {repo.name}
              </Typography>
              <Typography variant="body2" sx={{ my: "8px" }}>
                {repo.description || "No description available."}
              </Typography>
              <Typography variant="body2" display="flex" alignItems="center">
                <StarIcon sx={{ fontSize: 18, color: colors.yellowAccent[400], mr: "5px" }} />
                {repo.stargazers_count} stars
              </Typography>
              <Link href={repo.html_url} target="_blank" rel="noopener" underline="hover" color={colors.greenAccent[400]}>
                View on GitHub
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default GitHubRepos;
