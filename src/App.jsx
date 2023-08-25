import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Singup from './pages/singup/singup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Singup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
