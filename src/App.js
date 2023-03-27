import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/home'
import Login from './pages/login'
import About from './pages/about'

function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
