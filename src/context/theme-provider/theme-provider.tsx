import React, { createContext, useContext, useState, useEffect } from "react";
import { FontStyles, ThemeContextProps } from "./theme-provider.type";
import { useRouter } from "next/router";

const customPromise = new Promise<FontStyles>((resolve) => {
  setTimeout(() => {
    const data: FontStyles = {
      color: {
        // red: "0",
        // green: "128",
        // blue: "96",
        // red: "231",
        // green: "76",
        // blue: "60",
        red: "0",
        green: "147",
        blue: "153",
        // red: "153", 
        // green: "0",
        // blue: "82",
        // red: "27",
        // green: "94",
        // blue: "32",
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
  }, 1000);
});


const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { preview_color } = router.query;

  const [fontStyles, setFontStyles] = useState<FontStyles | null>(null);
  const [previewColor, setPreviewColor] = useState<string | "">("");

  const fetchFontStyles = async () => {
    try {
      // Check cached data
      const cachedData = localStorage?.getItem("fontStyles");
      const cachedFontStyles: FontStyles | null = cachedData ? JSON.parse(cachedData) : null;

      const fetchedFontStyles: FontStyles = await customPromise;

      // Compare fetched data with cached data
      const isEqual = JSON.stringify(cachedFontStyles) === JSON.stringify(fetchedFontStyles);

      if (!isEqual) {
        // Update cache if data is different
        localStorage?.setItem("fontStyles", JSON.stringify(fetchedFontStyles));
        applyStyles(fetchedFontStyles);
        setFontStyles(fetchedFontStyles);
      } else if (cachedFontStyles) {
        // Use cached data if it matches
        applyStyles(cachedFontStyles);
        setFontStyles(cachedFontStyles);
      }
    } catch (error) {
      console.error("Failed to fetch font styles:", error);
    }
  };

  const applyStyles = (data: FontStyles) => {
    const root = document.documentElement;
    const preview_rgb_color = previewColor ? previewColor?.split("|") : null

    // Set font-family and font-weight variables
    Object.entries(data.font_family).forEach(([key, font]) => {
      root.style.setProperty(`--font-${key}`, `'${font.name}', sans-serif`);
      root.style.setProperty(`--font-${key}-weight`, font.weight);

      // Dynamically load the font from Google Fonts
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css2?family=${font.name}:wght@400;500;600;700;800;900&display=swap`;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    });

    // Set color variables
    if (preview_rgb_color && preview_rgb_color?.[0] && preview_rgb_color?.[1] && preview_rgb_color?.[2]) {
      root.style.setProperty("--color-primary", `rgb(${preview_rgb_color?.[0]}, ${preview_rgb_color?.[1]}, ${preview_rgb_color?.[2]})`);
    }
    else {
      const { red, green, blue } = data.color;
      root.style.setProperty("--color-primary", `rgb(${red}, ${green}, ${blue})`);
    }
  };

  useEffect(() => {
    if (!previewColor && preview_color) {
      setPreviewColor(String(preview_color));
    }
  }, [preview_color]);

  useEffect(() => {
    fetchFontStyles();
  }, [previewColor])

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
