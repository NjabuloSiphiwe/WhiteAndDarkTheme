import { useContext, useState } from "react";
import { Level1 } from "./components/Level1";
import { THEME, ThemeModeContext } from "./context/ThemeModeCountext";

export function App() {
  const initialThemeMode = useContext(ThemeModeContext);
  const [themeMode, setThemeMode] = useState(initialThemeMode);
  console.log(themeMode);
  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <div
        style={{
          color: THEME[themeMode].textColor,
          backgroundColor: THEME[themeMode].backgroundColor,
          height: "100vh",
        }}
      >
        <Level1 />
      </div>
    </ThemeModeContext.Provider>
  );
}
