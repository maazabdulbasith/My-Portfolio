import { Box, Typography, Modal } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";

const TeamForm = ({
  openForm,
  setOpenForm,
  editMember,
  setEditMember,
  teamData,
  setTeamData,
}) => {
  const handleClose = () => {
    setOpenForm(false);
    setEditMember(null);
  };

  return (
    <Modal open={openForm} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#1f2a40",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
          minWidth: "300px",
        }}
      >
        <Typography variant="h6" mb={2}>
          {editMember ? "Edit Member" : "Add New Member"}
        </Typography>

        <Formik
          initialValues={{
            name: editMember?.name || "",
            email: editMember?.email || "",
            age: editMember?.age || "",
            phone: editMember?.phone || "",
            access: editMember?.access || "user",
          }}
          enableReinitialize
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            age: Yup.number().required("Age is required").positive().integer(),
            phone: Yup.string()
              .matches(/^\d{10}$/, "Phone must be 10 digits")
              .required("Phone is required"),
            access: Yup.string()
              .oneOf(["user", "manager", "admin"])
              .required("Access level is required"),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              if (editMember) {
                const res = await axios.put(
                  `http://localhost:5000/api/teams/${editMember._id}`,
                  values
                );
                setTeamData((prev) =>
                  prev.map((m) => (m._id === editMember._id ? res.data : m))
                );
                Swal.fire("Updated!", "Member updated successfully", "success").then(() => {
                  handleClose();
                  resetForm();
                });
              } else {
                const maxId =
                  teamData.length > 0
                    ? Math.max(...teamData.map((m) => m.id || 0))
                    : 0;
                const newMember = { ...values, id: maxId + 1 };
                const res = await axios.post(
                  "http://localhost:5000/api/teams",
                  newMember
                );
                setTeamData((prev) => [...prev, res.data]);
                Swal.fire("Added!", "Member added successfully", "success").then(() => {
                  handleClose();
                  resetForm();
                });
              }
            } catch (error) {
              console.error("Form submit error", error);
              Swal.fire(
                "Error",
                error.response?.data?.message || "Something went wrong",
                "error"
              );
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              {["name", "email", "age", "phone"].map((field) => (
                <div key={field} style={{ marginBottom: "10px" }}>
                  <input
                    type={field === "age" ? "number" : "text"}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={values[field]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                    }}
                  />
                  {touched[field] && errors[field] && (
                    <div style={{ color: "#ff4d4d", fontSize: "0.8rem" }}>
                      {errors[field]}
                    </div>
                  )}
                </div>
              ))}

              <select
                name="access"
                value={values.access}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="user">User</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
              {touched.access && errors.access && (
                <div style={{ color: "#ff4d4d", fontSize: "0.8rem" }}>
                  {errors.access}
                </div>
              )}

              <Box display="flex" justifyContent="space-between" mt={2}>
                <button
                  type="button"
                  onClick={handleClose}
                  style={{
                    backgroundColor: "#999",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "#4caf50",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {editMember ? "Update" : "Add"}
                </button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default TeamForm;
