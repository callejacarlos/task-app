class ThemeFactory {
  createTheme() {
    throw new Error("Método no implementado");
  }
}

class LightTheme extends ThemeFactory {
  createTheme() {
    return {
      background: "#ffffff",
      text: "#000000"
    };
  }
}

class DarkTheme extends ThemeFactory {
  createTheme() {
    return {
      background: "#1e1e1e",
      text: "#ffffff"
    };
  }
}

export function getTheme(theme) {
  switch (theme) {
    case "dark":
      return new DarkTheme().createTheme();
    default:
      return new LightTheme().createTheme();
  }
}