// import logo from './assets/logo.png'
import About from './components/About'
import Navigation from './components/Navbar'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Navigation/>
      <About/>
      <Experiences/>
      <Projects/>
      <Education/>
      <Contact/>
    </main>
  )
}

export default App
