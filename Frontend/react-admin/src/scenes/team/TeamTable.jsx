/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const TeamTable = ({
  teamData,
  selectedRows,
  setSelectedRows,
  setEditMember,
  setOpenForm,
  handleDelete,
  loading,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      width: 200,
      renderCell: (params) => (
        <Box display="flex" justifyContent="center" gap="10px" width="100%">
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#ff9800" }}
            onClick={() => {
              setEditMember(params.row);
              setOpenForm(true);
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#d33" }}
            onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            access === "admin"
              ? colors.greenAccent[600]
              : colors.greenAccent[700]
          }
          borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          {access === "manager" && <SecurityOutlinedIcon />}
          {access === "user" && <LockOpenOutlinedIcon />}
          <Typography color={colors.grey[100]} ml="5px">
            {access}
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <>
      <Box display="flex" justifyContent="flex-end" gap={2} mb={2}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#4caf50" }}
          onClick={() => {
            setEditMember(null);
            setOpenForm(true);
          }}
        >
          Add Member
        </Button>

        {selectedRows.length > 0 && (
          <Button
            variant="contained"
            sx={{ backgroundColor: "#d33" }}
            onClick={() => handleDelete(selectedRows)}
          >
            Delete Selected
          </Button>
        )}
      </Box>

      <Box height="75vh">
        {loading ? (
          <Box position="relative" height="100%">
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
              sx={{ borderRadius: "4px" }}
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              sx={{ transform: "translate(-50%, -50%)" }}
            >
              <CircularProgress color="success" />
            </Box>
          </Box>
        ) : (
          <DataGrid
            checkboxSelection
            rows={teamData}
            columns={columns}
            getRowId={(row) => row._id}
            onRowSelectionModelChange={(newSelection) =>
              setSelectedRows(newSelection)
            }
            rowSelectionModel={selectedRows}
            sx={{
              "& .MuiDataGrid-root": { border: "none" },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
                display: "flex",
                alignItems: "center",
              },
              "& .name-column--cell": { color: colors.greenAccent[300] },
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
          />
        )}
      </Box>
    </>
  );
};

export default TeamTable;
