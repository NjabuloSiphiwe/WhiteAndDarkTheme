import { createContext } from "react";
export const ThemeModeContext = createContext ("light");

export const THEME ={
    light: {
        textColor: "#1E1F2C",
        backgroundColor: "white",

    },
    dark: {
        backgroundColor:"#1E1F2C",
        textColor: "white"
    }
}