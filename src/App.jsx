import styles from "./App.module.css"
import { Navbar } from "./components/navbar/Navbar"
import { Home } from "./components/home/Home"

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
