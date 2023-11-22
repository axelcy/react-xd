import { createContext, useState } from "react"

// 1. El contexto en sí
export const ThemeContext = createContext()

// 2. El provider
export const ThemeProvider = ({ children }) => {
    // Si el estado es un OBJETO, usar:     JSON.parse(OBJETO) y JSON.stringify(OBJETO)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'white')

    let colors = {
        white: '#7d7d7d',
        blue: '#44779e'
    }

    document.querySelector('body').style.backgroundColor = colors[theme]
    localStorage.setItem('theme', theme)

    return(
        // Esto es el provider:
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
        // La app se envuelve en el provider para que todos los componentes tengan acceso a su valor. (/src/main.jsx)
        // En este caso, el valor que le indicamos es un objeto con usuario y setUsuario.
        // usuario es un estado, y setUsuario la función que lo modifica.
        // Esto nos permite acceder a un estado en toda la app, se le llama estado global.
    )
}