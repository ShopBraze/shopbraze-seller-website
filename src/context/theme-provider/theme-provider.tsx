import React, { createContext, useContext, useState, useEffect } from "react";

const customPromise = new Promise<FontStyles>((resolve) => {
  setTimeout(() => {
    const data: FontStyles = {
      color: {
        red: "0",
        green: "147",
        blue: "153",
      },
      font_family: {
        title1: { name: "Podkova", weight: "500" },
        title2: { name: "Poppins", weight: "900" },
        title3: { name: "Blinker", weight: "500" },
        heading: { name: "Babylonica", weight: "700" },
        body: { name: "Caramel", weight: "500" },
      },
    };
    resolve(data);
  }, 0);
});

type FontFamily = {
  name: string;
  weight: string;
};

type FontStyles = {
  color: { red: string; green: string; blue: string };
  font_family: Record<string, FontFamily>;
};

type ThemeContextProps = {
  fontStyles: FontStyles | null;
  setFontStyles: (styles: FontStyles) => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontStyles, setFontStyles] = useState<FontStyles | null>(null);

  useEffect(() => {
    const fetchFontStyles = async () => {
      try {

        const data: FontStyles = await customPromise;
        setFontStyles(data);

        // Set CSS variables in :root for fonts and color
        const root = document.documentElement;

        // Set font-family and font-weight variables
        Object.entries(data?.font_family)?.forEach(([key, font]) => {
          root.style.setProperty(`--font-${key}`, `'${font?.name}', sans-serif`);
          root.style.setProperty(`--font-${key}-weight`, font?.weight);

          // Dynamically load the font from Google Fonts
          const link = document.createElement("link");
          link.href = `https://fonts.googleapis.com/css2?family=${font?.name}:wght@400;500;600;700;800;900&display=swap`;
          link.rel = "stylesheet";
          document.head.appendChild(link);
        });

        // Set color variables for primary color
        const { red, green, blue } = data.color;
        root.style.setProperty(`--color-primary`, `rgb(${red}, ${green}, ${blue})`);
      } catch (error) {
        console.error("Failed to fetch font styles:", error);
      }
    };

    fetchFontStyles();
  }, []);

  return (
    <ThemeContext.Provider value={{ fontStyles, setFontStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
