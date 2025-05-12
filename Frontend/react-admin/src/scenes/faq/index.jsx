/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are the technologies used in this Portfolio Project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This Portfolio Application was built using React.js, Material UI, Nivo for Charts, and MongoDB with Node.js for the backend.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What libraries did you use along with it?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I used Material UI for a modern and responsive design, React-Admin for the admin panel, Formik and Yup for form handling, SweetAlert2 for alerts, Nivo for interactive charts, Axios for API calls, EmailJS for Contact me system and MongoDB for data storage.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What was the most enjoyable part of this project and what was the most boring part?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The most enjoyable part was integrating various libraries with React.js, especially the interactive charts and form validation. The most challenging part was dealing with complex state management and handling asynchronous API calls.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What's your GitHub repository?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can find the repository at: <a href="https://github.com/maazabdulbasith" target="_blank" rel="noopener noreferrer">https://github.com/maazabdulbasith</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Do you have other projects?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, I have:
            <ul>
              <li>Flight Ticketing Website: Built with Java, MySQL, HTML, CSS, JavaScript, and JDBC.</li>
              <li>ChatterBox: An Instant Messaging Application built with the MERN stack and DevOps technologies.</li>
              <li>Bidsecure: A Secure Bidding Application using Ethereum Blockchain.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
