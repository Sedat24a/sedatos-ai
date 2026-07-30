import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";


function Sidebar() {

  const menu = [
    "Dashboard",
    "AI Copilot",
    "CRM",
    "ERP",
    "Finans",
    "Takvim",
    "Gayrimenkul",
    "Ayarlar"
  ];


  return (

    <Paper
      square
      sx={{
        width:280,
        borderRadius:0,
        p:3,
        background:"#09090B",
        color:"white"
      }}
    >

      <Typography
        variant="h5"
        sx={{
          mb:4,
          fontWeight:700
        }}
      >
        SedatOS AI
      </Typography>


      <List>

        {menu.map((item)=>(

          <ListItem
            key={item}
            sx={{
              borderRadius:2,
              mb:1,
              cursor:"pointer",
              "&:hover":{
                background:"#1F2937"
              }
            }}
          >

            <ListItemText
              primary={item}
            />

          </ListItem>

        ))}

      </List>


    </Paper>

  );
}


export default Sidebar;s