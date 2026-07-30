import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider,CssBaseline } from "@mui/material";
import "@fontsource/inter";
import "./index.css";
import theme from "./styles/themes/theme";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  </StrictMode>
);
