import { useState } from "react";
import { getTheme } from "./patterns/themeFactory";

function App() {
  const [mode, setMode] = useState("light");

  const theme = getTheme(mode);

  return (
    <div style={{
      background: theme.background,
      color: theme.text,
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h1>TaskFlow 🚀</h1>

      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        Cambiar tema
      </button>
    </div>
  );
}

export default App;