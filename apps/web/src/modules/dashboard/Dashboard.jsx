import { Grid, Paper, Typography, Box } from "@mui/material";

function Dashboard() {
  const cards = [
    "AI Durumu",
    "Bugünkü Görevler",
    "Finans Analizi",
    "Þirket Verileri"
  ];

  return (
    <Box sx={{p:3}}>
      <Typography variant="h4" sx={{mb:3,color:"#fff"}}>
        SedatOS Kontrol Paneli
      </Typography>

      <Grid container spacing={3}>

        {cards.map((item)=>(
          <Grid size={{xs:12,md:3}} key={item}>
            <Paper
              sx={{
                p:3,
                height:160,
                background:"#111827",
                color:"#fff"
              }}
            >
              <Typography variant="h6">
                {item}
              </Typography>

              <Typography sx={{mt:2,color:"#94a3b8"}}>
                AI analiz bekliyor
              </Typography>

            </Paper>
          </Grid>
        ))}


        <Grid size={{xs:12,md:8}}>
          <Paper
            sx={{
              height:450,
              p:3,
              background:"#111827",
              color:"#fff"
            }}
          >
            <Typography variant="h5">
              Yapay Zeka Ýþletim Merkezi
            </Typography>
          </Paper>
        </Grid>


        <Grid size={{xs:12,md:4}}>
          <Paper
            sx={{
              height:450,
              p:3,
              background:"#111827",
              color:"#fff"
            }}
          >
            <Typography variant="h5">
              AI Yardýmcý Pilot
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Dashboard;
