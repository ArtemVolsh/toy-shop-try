import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import "./index.css";
import App from "./components/App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00a9ff",
    },
    secondary: {
      main: "#00ff00",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
