import './index.css'
import { Login } from './components/Login'
import { Home } from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound'
import ProtectedRoute from './ProtectedRoute'
//

function App() {App
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="*" element={<NotFound />} />
              </Routes>
    </Router>
   </>
  )
}

export default App
