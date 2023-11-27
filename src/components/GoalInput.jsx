import { useEffect, useRef, useState } from 'react'
import './GoalInput.css'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function GoalInput({ children }) {
    const {theme, setTheme} = useContext(ThemeContext)

    const [listaTextos, setListaTextos] = useState(JSON.parse(localStorage.getItem('listaTextos')) || [])
    const [contador, setContador] = useState(0)
    const inputRef = useRef()

    useEffect(() => {
        document.title = contador
    }, [contador])

    useEffect(() => {
        setContador(listaTextos.length)
        localStorage.setItem('listaTextos', JSON.stringify(listaTextos))
    }, [listaTextos])

    const handleClick = () => {
        let nuevoTexto = inputRef.current.value
        setListaTextos([...listaTextos, nuevoTexto])
    }

    const checkearTexto = (index) => {
        let texto = document.getElementById(`texto-${index}`)
        texto.classList.toggle('tachado')
    }

    return (
        <article>
            <h2>La lista tiene {contador} elementos</h2>
            <h4>Contexto: {theme}</h4>
            <input type="text" ref={inputRef} />
            {children}
            <button onClick={handleClick}>Boton xd</button>
            <div className='lista-textos'>
                {
                    listaTextos.map((texto, index) => (
                        <p key={index} className='texto'>
                            <input type="checkbox" onClick={() => checkearTexto(index)} />
                            <span id={`texto-${index}`}>{texto}</span>
                        </p>
                    ))
                }
            </div>
        </article>
    )
}

export default GoalInput