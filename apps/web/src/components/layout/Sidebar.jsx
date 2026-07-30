import { Paper, Typography, Box } from "@mui/material";
import { navigation } from "../../engine/navigation/navigation";

function Sidebar(){

return(

<Paper
square
sx={{
width:280,
height:"100vh",
background:"#09090B",
color:"#fff",
p:3
}}
>

<Typography
variant="h5"
sx={{mb:4,fontWeight:700}}
>
SedatOS AI
</Typography>


{navigation.map(item=>(

<Box
key={item.id}
sx={{
mb:2,
p:1.5,
borderRadius:2,
cursor:"pointer",
"&:hover":{
background:"#18181B"
}
}}
>

<Typography>
{item.title}
</Typography>


{item.children?.map(child=>(

<Typography
key={child.path}
sx={{
ml:2,
mt:1,
fontSize:14,
color:"#A1A1AA"
}}
>
{child.title}
</Typography>

))}

</Box>

))}


</Paper>

);

}

export default Sidebar;