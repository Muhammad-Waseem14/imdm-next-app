"use client";
import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from "next-themes";

function DarkModeSwitch() {
  console.log("dak mode switch");
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <MdDarkMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModeSwitch;
