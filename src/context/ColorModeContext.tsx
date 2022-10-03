import React, { createContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface ColorModeCtx {
  toggle: "light" | "dark";
  setToggle?: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  colorMode: {
    toggleColorMode: () => void;
  };
}

export const ColorModeContext = createContext<ColorModeCtx>({
  toggle: "dark",
  colorMode: {
    toggleColorMode: () => {},
  },
});

const ColorModeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = useLocalStorage<"light" | "dark">("Toggle Mode", "dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setToggle(toggle === "light" ? "dark" : "light"),
    }),
    [toggle]
  );

  return (
    <ColorModeContext.Provider value={{ toggle, setToggle, colorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
