/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import * as ProjectService from "../../services/projectService";  // Importing the updated service

const validationSchema = yup.object().shape({
  name: yup.string().required("Project name is required"),
  status: yup
    .string()
    .oneOf(["Planned", "Ongoing", "Completed"])
    .required("Status is required"),
  techStack: yup.string().required("Tech stack is required"),
  github: yup.string().url("Must be a valid URL"),
  live: yup.string().url("Must be a valid URL"),
});

const statusOptions = ["Planned", "Ongoing", "Completed"];

const ProjectForm = ({ open, onClose, fetchProjects, initialData }) => {
  const isEditMode = Boolean(initialData && initialData._id);

  const handleFormSubmit = async (values) => {
    try {
      if (isEditMode) {
        // Updating the project using the service
        await ProjectService.updateProject(initialData._id, values);
        Swal.fire("Updated!", "Project has been updated.", "success");
      } else {
        // Creating a new project using the service
        await ProjectService.createProject(values);
        Swal.fire("Added!", "Project has been added.", "success");
      }
      onClose();
      fetchProjects();
    } catch (error) {
      console.error("Error submitting project:", error);
      Swal.fire("Error", "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{isEditMode ? "Edit Project" : "Add New Project"}</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            name: initialData?.name || "",
            status: initialData?.status || "",
            techStack: initialData?.techStack || "",
            github: initialData?.github || "",
            live: initialData?.live || "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => {
            const isCompleted = values.status === "Completed";

            return (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="dense"
                  label="Project Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  fullWidth
                  margin="dense"
                  select
                  label="Status"
                  name="status"
                  value={values.status}
                  onChange={(e) => {
                    handleChange(e);
                    // Clear GitHub & Live fields if status is not "Completed"
                    if (e.target.value !== "Completed") {
                      setFieldValue("github", "");
                      setFieldValue("live", "");
                    }
                  }}
                  onBlur={handleBlur}
                  error={touched.status && Boolean(errors.status)}
                  helperText={touched.status && errors.status}
                >
                  {statusOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  margin="dense"
                  label="Tech Stack (comma separated)"
                  name="techStack"
                  value={values.techStack}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.techStack && Boolean(errors.techStack)}
                  helperText={touched.techStack && errors.techStack}
                />
                {isCompleted && (
                  <>
                    <TextField
                      fullWidth
                      margin="dense"
                      label="GitHub Link"
                      name="github"
                      value={values.github}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.github && Boolean(errors.github)}
                      helperText={touched.github && errors.github}
                    />
                    <TextField
                      fullWidth
                      margin="dense"
                      label="Live Demo Link"
                      name="live"
                      value={values.live}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.live && Boolean(errors.live)}
                      helperText={touched.live && errors.live}
                    />
                  </>
                )}
                <Box mt={2} display="flex" justifyContent="flex-end">
                  <Button onClick={onClose} sx={{ mr: 2 }}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    {isEditMode ? "Update" : "Add"}
                  </Button>
                </Box>
              </form>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectForm;
