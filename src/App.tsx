import { Route , BrowserRouter , Routes} from 'react-router-dom'
import Home from './pages/HomePage'
import SignupCard from './components/auth/Login'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route index element={<Home />} />
      <Route path="/signup" element={<SignupCard />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
