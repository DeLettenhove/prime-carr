import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Cars from './pages/cars/Cars'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<h1>Chosen car!!!</h1>} />
        <Route path="*" element={<h1>Not Found!!!</h1>} />
      </Routes>
  )
}

export default App
