import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './views/Home'
import Instrucciones from './views/Instrucciones'
import { ThemeProvider } from './context/ThemeContext'


function App() {

    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='instrucciones' element={<Instrucciones />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
