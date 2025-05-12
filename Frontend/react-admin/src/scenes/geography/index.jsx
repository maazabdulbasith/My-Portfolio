/* eslint-disable react/prop-types */
import React from 'react';
import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import axios from "axios";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [geoData, setGeoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await axios.get("/api/geography"); // Replace with your actual endpoint
        setGeoData(response.data);
      } catch (error) {
        console.error("Error fetching geography data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGeoData();
  }, []);

  return (
    <Box m="20px">
      <Header title="Geography" subtitle="User Distribution by Location" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="8px"
        p="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {loading ? (
          <Box color={colors.greenAccent[500]}>Loading map...</Box>
        ) : (
          <GeographyChart data={geoData} />
        )}
      </Box>
    </Box>
  );
};

export default Geography;
