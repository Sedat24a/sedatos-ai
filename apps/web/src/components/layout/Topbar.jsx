import { AppBar,Toolbar,Typography } from "@mui/material";

function Topbar() {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        bgcolor:"#111827",
        borderBottom:"1px solid rgba(255,255,255,.06)"
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
