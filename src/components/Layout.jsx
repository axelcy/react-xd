import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
import { ThemeContext } from '../context/ThemeContext'

function Layout() {
  const { theme, setTheme } = useContext(ThemeContext)

  const cambiarFondo = () => {
    let nuevoFondo = 'blue'
    if (theme === 'blue') nuevoFondo = 'white'
    setTheme(nuevoFondo)
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