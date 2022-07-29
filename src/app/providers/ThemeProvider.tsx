import React, { createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme, styled } from "../../theme/stitches.config";

export type ThemeContextType = {
    theme: string,
    toggleTheme: () => void
}

export type ThemeProviderType = {
    children: JSX.Element,
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProviderRoot = styled('div', {
    fontFamily: '$system',
    backgroundColor: '$background',
    color: '$gray12',
    minHeight: '100vh',
    overflowX: 'hidden',
});

export function ThemeProvider({ children }: ThemeProviderType) {
    const [theme, setTheme] = useState<any>(lightTheme);

    const isThemeActivated = true;

    useEffect(() => {
        if (isThemeActivated) {
            const metaThemeColor = document.querySelector("meta[name='theme-color']");
            if (!!metaThemeColor) {
                metaThemeColor.setAttribute("content", (theme === lightTheme) ? '#FFFFFF' : '#0000000');
            }
        }
    }, [theme]);

    useEffect(() => {
        if (isThemeActivated) {
            initMatchMedia();
        }
    }, []);

    function toggleTheme() {
        if (theme === lightTheme) {
            setTheme(darkTheme);
        } else {
            setTheme(lightTheme);
        }
    }

    function initMatchMedia() {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme(darkTheme);
            } else {
                setTheme(lightTheme);
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (e.matches) {
                    setTheme(darkTheme);
                } else {
                    setTheme(lightTheme);
                }
            });
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProviderRoot className={theme}>
                {children}
            </ThemeProviderRoot>
        </ThemeContext.Provider>
    )
}