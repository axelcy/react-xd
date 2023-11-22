import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import { ThemeContext } from '../context/ThemeContext'

function Layout() {
  // A PARTIR DE LA LINEA DE CÓDIGO: src/context/ThemeContext.jsx:21
  // El valor del provider de ThemeContext es = { theme, setTheme }
  // igualamos { theme, setTheme } al ThemeContext (osea al valor escrito en el provider)
  const { theme, setTheme } = useContext(ThemeContext)

  const cambiarFondo = () => {
    let nuevoFondo = 'blue'
    if (theme === 'blue') nuevoFondo = 'white'
    // Como usamos la función del context, se va a ejecutar lo del provider.
    // El provider automáticamente cambia el color del fondo y guarda el nuevo valor en el localStorage.
    setTheme(nuevoFondo)
    // Acá, no cambiamos el color del fondo ni guardamos el nuevo valor en el localStorage
    // Ya que, como se ejecuta el provider, el provider lo va a hacer SIEMPRE por nosotros.
    // Por eso, solo es necesario cambiar el valor del estado global, del resto se encarga el context.
  }
  return (
    <>
      <nav>
          <Link to='/'>Home</Link>
          <Link to='/instrucciones'>Instrucciones</Link>
      </nav>
      <Outlet />
      <footer>
        Footer
        <button onClick={cambiarFondo}>Cambiar fondo</button>
      </footer>
    </>
  )
}

export default Layout