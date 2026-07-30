import {
  Grid,
  Paper,
  Typography,
  Box
} from "@mui/material";


const widgets = [
  {
    title: "AI Günlük Analiz",
    value: "Hazır",
    text: "Yapay zeka analiz motoru aktif"
  },
  {
    title: "Görevler",
    value: "12",
    text: "Öncelikli görev"
  },
  {
    title: "Şirket Skoru",
    value: "87%",
    text: "Performans analizi"
  },
  {
    title: "AI Hafıza",
    value: "25",
    text: "Öğrenilen veri"
  }
];


function Dashboard() {

  return (
    <Box sx={{p:3}}>

      <Typography
        variant="h4"
        sx={{
          mb:3,
          fontWeight:700
        }}
      >
        SedatOS Kontrol Merkezi
      </Typography>


      <Grid container spacing={3}>

        {widgets.map((item)=>(

          <Grid
            item
            xs={12}
            md={3}
            key={item.title}
          >

            <Paper
              sx={{
                p:3,
                height:160,
                borderRadius:3,
                background:"#111827",
                color:"#fff"
              }}
            >

              <Typography>
                {item.title}
              </Typography>

              <Typography
                variant="h3"
                sx={{mt:2}}
              >
                {item.value}
              </Typography>

              <Typography variant="caption">
                {item.text}
              </Typography>

            </Paper>

          </Grid>

        ))}


        <Grid item xs={12} md={8}>

          <Paper
            sx={{
              height:420,
              p:3,
              borderRadius:3
            }}
          >

            <Typography variant="h5">
              Yapay Zeka Yönetim Merkezi
            </Typography>

          </Paper>

        </Grid>


        <Grid item xs={12} md={4}>

          <Paper
            sx={{
              height:420,
              p:3,
              borderRadius:3
            }}
          >

            <Typography variant="h5">
              Yapay Zeka Yardımcı Pilotu
            </Typography>

          </Paper>

        </Grid>


      </Grid>

    </Box>
  );
}


export default Dashboard;