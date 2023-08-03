
import './App.css'
import {Route,Routes} from 'react-router-dom'
import { Menu } from './components/Menu'
import {About} from './components/About'
import {Contact} from './components/Contact'
import {Home} from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <div>
<Navbar/>
      <Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/menu' element={<Menu/>} />
<Route path='/contact' element={<Contact/>} />

      </Routes>
      <Footer/>
    
    </div>
  )
}

export default App
