import { useEffect, useState } from "react";

export function ThemeToggler() {
  const [theme, setTheme] = useState("light");
  const nextTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <button onClick={() => setTheme(nextTheme)}>
      Change to {nextTheme} mode
    </button>
  );
}
