import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";

import { themes } from "./utils/constants";
import { ThemeType } from "./utils/enums";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const systemTheme = useColorScheme();
    const [theme, setTheme] = useState(ThemeType.light);

    useEffect(() => {
        loadTheme();
    }, []);

    useEffect(() => {
        if (systemTheme) {
            setTheme(systemTheme === "dark" ? ThemeType.dark : ThemeType.light);
        }
    }, [systemTheme]);

    async function loadTheme() {
        const savedTheme = await AsyncStorage.getItem("@theme");
        if (savedTheme) {
            setTheme(savedTheme as ThemeType);
        }
    }

    const toggleTheme = () => {
        const newTheme = theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
        setTheme(newTheme);
        AsyncStorage.setItem("@theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={themes[theme]}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
