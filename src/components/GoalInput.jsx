import { useEffect, useRef, useState } from 'react'
import './GoalInput.css'

function GoalInput() {
    const [listaTextos, setListaTextos] = useState([])
    const [contador, setContador] = useState(0)
    const inputRef = useRef()

    useEffect(() => {
        document.title = contador
    }, [contador])

    useEffect(() => {
        setContador(listaTextos.length)
    }, [listaTextos])

    const agregarTexto = () => {
        let nuevoTexto = inputRef.current.value
        setListaTextos([...listaTextos, nuevoTexto])
    }

    return (
        <article>
            <h2>La lista tiene {contador} elementos</h2>
            <input type="text" ref={inputRef} />
            <button onClick={agregarTexto}>Boton xd</button>
            {
                listaTextos.map((texto, index) => (
                    <p key={index} className='texto'>{texto}</p>
                ))
            }
        </article>
    )
}

export default GoalInput