import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Cars from '../pages/cars/Cars'
import Constructor from '../pages/constructor/Constructor'
import NotFound from '../pages/not-found/NotFound'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:id" element={<Constructor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
