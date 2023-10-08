import { Route , BrowserRouter , Routes} from 'react-router-dom'
import Home from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashbord'
import ProtectedLayout from './components/layout/ProtectedLayout'

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route index element={<Home />} />
      <Route element={<ProtectedLayout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>  
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
