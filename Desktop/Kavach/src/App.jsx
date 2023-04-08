import { BrowserRouter } from "react-router-dom"
import { Hero, About, Contacts, Navbar } from "./assets/components"




const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div>
          <Navbar />
        </div>

        <div>



          <About />
          <Hero />
          <Contacts />
        </div>
      </div>


    </BrowserRouter>
  )
}

export default App
