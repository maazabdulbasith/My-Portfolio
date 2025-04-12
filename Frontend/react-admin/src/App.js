import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Projects from "./scenes/projects";
import AboutMe from "./scenes/aboutme/index.jsx";
import Bar from "./scenes/bar";
import Contact from "./scenes/contact";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box display="flex" width="100vw" height="100vh">
                    <Sidebar />
                    <Box
                        component="main"
                        flex="1"
                        height="100vh"
                        overflow="auto"
                    >
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/aboutme" element={<AboutMe />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />{" "}
                            <Route path="/geography" element={<Geography />} />
                        </Routes>
                    </Box>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
