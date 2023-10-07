import { Route , BrowserRouter , Routes} from 'react-router-dom'
import Home from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route index element={<Home />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
