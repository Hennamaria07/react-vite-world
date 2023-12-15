import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider;
// cutsom hook
export default function UseTheme() {
    return useContext(ThemeContext);
}