// eslint-disable-next-line no-unused-vars
import { Box, Typography, useTheme, Button, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { projectService } from "../../services/projectService"; // Import the ProjectService for API calls
import Swal from "sweetalert2";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import ProjectForm from "./ProjectForm";

const Projects = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [projects, setProjects] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await projectService.getProjects(); // Using ProjectService for API call
      setProjects(res.data);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleEdit = (project) => {
    setEditingProject(project);
    setOpenForm(true);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the project.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    });

    if (result.isConfirmed) {
      try {
        await projectService.deleteProject(id); // Using ProjectService to delete the project
        fetchProjects();
        Swal.fire("Deleted!", "Project has been removed.", "success");
      } catch (err) {
        console.error("Delete error:", err);
        Swal.fire("Error", "Could not delete project.", "error");
      }
    }
  };

  const columns = [
    {
      field: "slNo",
      headerName: "Sl. No.",
      flex: 0.5,
      renderCell: (params) => projects.indexOf(params.row) + 1,
    },
    {
      field: "name",
      headerName: "Project Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "techStack",
      headerName: "Tech Stack",
      flex: 1.5,
      renderCell: (params) =>
        Array.isArray(params.row.stack)
          ? params.row.stack.join(", ")
          : params.row.techStack || "—",
    },
    {
      field: "github",
      headerName: "GitHub",
      flex: 1,
      renderCell: (params) =>
        params.row.github ? (
          <a
            href={params.row.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.greenAccent[400], textDecoration: "underline" }}
          >
            View
          </a>
        ) : (
          <Typography color={colors.grey[300]}>—</Typography>
        ),
    },
    {
      field: "live",
      headerName: "Live Demo",
      flex: 1,
      renderCell: (params) =>
        params.row.live && params.row.live.startsWith("http") ? (
          <a
            href={params.row.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.greenAccent[400], textDecoration: "underline" }}
          >
            Visit
          </a>
        ) : (
          <Typography color={colors.grey[300]}>
            {params.row.live || "Not Live"}
          </Typography>
        ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Box display="flex" gap="10px">
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleEdit(params.row)}
            sx={{ borderColor: colors.greenAccent[400], color: colors.greenAccent[400] }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleDelete(params.row._id)}
            sx={{ borderColor: colors.redAccent[400], color: colors.redAccent[400] }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="PROJECTS" subtitle="List of Your Portfolio Projects" />

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ backgroundColor: colors.greenAccent[600], mt: 2 }}
        onClick={() => {
          setEditingProject(null);
          setOpenForm(true);
        }}
      >
        Add Project
      </Button>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="70vh">
          <CircularProgress />
        </Box>
      ) : (
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { borderBottom: "none" },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid
            checkboxSelection
            rows={projects}
            columns={columns}
            getRowId={(row) => row._id}
          />
        </Box>
      )}

      {openForm && (
        <ProjectForm
          open={openForm}
          onClose={() => setOpenForm(false)}
          fetchProjects={fetchProjects}
          initialData={editingProject}
        />
      )}
    </Box>
  );
};

export default Projects;
