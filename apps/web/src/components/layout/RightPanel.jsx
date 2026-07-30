import { Paper,Typography } from "@mui/material";

function RightPanel() {
  return (
    <Paper
      square
      sx={{
        width:360,
        borderRadius:0,
        p:3
      }}
    >
      <Typography variant="h6">
        AI Copilot
      </Typography>
    </Paper>
  );
}

export default RightPanel;
