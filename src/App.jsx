import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Cars from './pages/cars/Cars'
import Constructor from './pages/constructor/Constructor'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:id" element={<Constructor />} />
      <Route path="*" element={<h1>Not Found!!!</h1>} />
    </Routes>
  )
}

export default App
