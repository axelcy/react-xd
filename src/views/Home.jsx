import './Home.css'
import GoalInput from '../components/GoalInput'
import { ThemeProvider } from '../context/ThemeContext'

function Home() {
  return (
      <main>
        <h1>Hola</h1>
        <GoalInput />
      </main>
  )
}

export default Home
