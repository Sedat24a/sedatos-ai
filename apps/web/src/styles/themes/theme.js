import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#5B8CFF" },
    secondary: { main: "#00E5FF" },
    background: {
      default: "#09090B",
      paper: "#111827",
    },
  },

  shape: {
    borderRadius: 18,
  },

  typography: {
    fontFamily: "Inter,sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,.06)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: "#111827",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,.05)",
          boxShadow: "0 20px 45px rgba(0,0,0,.35)",
        },
      },
    },
  },
});

export default theme;
