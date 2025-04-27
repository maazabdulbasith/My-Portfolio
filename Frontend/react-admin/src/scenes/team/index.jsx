import { Box } from "@mui/material";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { getTeams } from "../../services/teamService";
import Swal from "sweetalert2";
import axios from "axios";
import TeamTable from "./TeamTable";
import TeamForm from "./TeamForm";

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [editMember, setEditMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getTeams();
        setTeamData(data);
      } catch (error) {
        console.error("Failed to fetch team data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the team member.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axios.delete(`http://backend:5000/api/teams/${id}`);
        Swal.fire("Deleted!", res.data.message, "success");
        setTeamData((prev) => prev.filter((item) => item._id !== id));
      } catch (error) {
        Swal.fire("Error", "Something went wrong while deleting.", "error");
      }
    }
  };

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />

      <TeamTable
        teamData={teamData}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        setEditMember={setEditMember}
        setOpenForm={setOpenForm}
        handleDelete={handleDelete}
        loading={loading}
      />

      <TeamForm
        openForm={openForm}
        setOpenForm={setOpenForm}
        editMember={editMember}
        setEditMember={setEditMember}
        teamData={teamData}
        setTeamData={setTeamData}
      />
    </Box>
  );
};

export default Team;
