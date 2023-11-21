import { createContext, useState } from "react"

// 1. El contexto en sí
export const ThemeContext = createContext()

// 2. El provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'white')

    let colors = {
        white: '#7d7d7d',
        blue: '#44779e'
    }

    document.querySelector('body').style.backgroundColor = colors[theme]
    localStorage.setItem('theme', theme)

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}