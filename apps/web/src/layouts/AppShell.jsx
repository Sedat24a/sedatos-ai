import { Box } from "@mui/material";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import Dashboard from "../modules/dashboard/Dashboard";
import RightPanel from "../components/layout/RightPanel";

function AppShell() {
  return (
    <Box sx={{display:"flex",height:"100vh",background:"#09090B"}}>
      <Sidebar/>

      <Box sx={{flex:1,display:"flex",flexDirection:"column"}}>
        <Topbar/>
        <Dashboard/>
      </Box>

      <RightPanel/>
    </Box>
  );
}

export default AppShell;
