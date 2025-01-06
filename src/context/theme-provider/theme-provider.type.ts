
export type FontFamily = {
  name: string;
  weight: string;
};

export type FontStyles = {
  color: { red: string; green: string; blue: string };
  font_family: Record<string, FontFamily>;
};

export type ThemeContextProps = {
  fontStyles: FontStyles | null;
  setFontStyles: (styles: FontStyles) => void;
};