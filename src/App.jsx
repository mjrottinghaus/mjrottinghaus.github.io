import styles from "./App.module.css"
import { Navbar } from "./components/navbar/Navbar"
import { Home } from "./components/home/Home"
import { About } from "./components/about/About"
import { Experience } from "./components/experience/Experience"

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
    </div>
  )
}

export default App
