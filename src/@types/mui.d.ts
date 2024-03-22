import "@mui/material/styles";
import "@mui/material/Button";
import {
  type PaletteColor,
  type PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface GradientColor {
    start: string;
    middle: string;
    end: string;
  }

  interface Palette {
    tertiary: PaletteColor;
    gradient: GradientColor;
    off: PaletteColor;
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
    gradient?: GradientColor;
    off?: PaletteColorOptions;
  }
}
