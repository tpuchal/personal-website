'use client'

import { useTheme } from "@/components/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    if (theme === undefined) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 ml-2 transition-colors bg-background text-fontcolor border border-green-500"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;
