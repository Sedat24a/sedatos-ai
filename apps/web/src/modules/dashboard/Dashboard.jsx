import { Grid,Paper } from "@mui/material";

function Dashboard() {
  return (
    <Grid container spacing={3} sx={{p:3}}>
      {[1,2,3,4].map((item)=>(
        <Grid size={3} key={item}>
          <Paper sx={{height:180}}/>
        </Grid>
      ))}

      <Grid size={8}>
        <Paper sx={{height:500}}/>
      </Grid>

      <Grid size={4}>
        <Paper sx={{height:500}}/>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
