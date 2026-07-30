import { Paper,Typography } from "@mui/material";

function Sidebar() {
  return (
    <Paper square sx={{
      width:280,
      borderRadius:0,
      p:3
    }}>
      <Typography variant="h5">
        SedatOS AI
      </Typography>
    </Paper>
  );
}

export default Sidebar;
