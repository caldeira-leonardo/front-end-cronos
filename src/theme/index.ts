import { createTheme } from "@mui/material";
import { ptBR } from "@mui/material/locale";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#007aff",
        contrastText: "#f0f0f0",
      },
      secondary: {
        main: "#25836d",
        contrastText: "#f0f0f0",
      },
      background: {
        default: "#007aff",
      },

      gradient: {
        start: "#f0f0f0",
        middle: "#f0f0f0",
        end: "#007aff",
      },
    },
    components: {
      MuiTextField: { defaultProps: { size: "small" } },
      MuiFormControl: { defaultProps: { size: "small" } },
      MuiSelect: { defaultProps: { size: "small" } },
      MuiButton: { defaultProps: { color: "secondary", variant: "contained" } },
    },
  },
  ptBR
);

export default theme;
