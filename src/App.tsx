import { Route , BrowserRouter , Routes} from 'react-router-dom'
import Home from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashbord'
import ProtectedLayout from './components/layout/ProtectedLayout'
import ProjectPage from './pages/ProjectPage'
import { useAppSelector } from './api/store'
import { selectAccessToken } from './components/auth/authSlice'


function App() {
  // useEffect(()=>{
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const code = urlParams.get('code');
  //   const state = urlParams.get('state');

  //   if (code && state) {
  //     fetch('', {
  //       method : 'POST',
  //       headers : {
  //         'Content-Type' : 'application / json',
  //       },
  //       body:JSON.stringify({code,state}),
  //     })
  //   }
  // })
  const isAuthenticated : string  =  useAppSelector(selectAccessToken) ?? "";
  
  return (
    <BrowserRouter>
     <Routes>
     

        {isAuthenticated.length > 0 ? <Route index element={<Dashboard />} /> : <Route index element={<Home />} />  }
      <Route element={<ProtectedLayout />}>
      <Route index path="/dashboard" element={<Dashboard />} />
      <Route path="/project/:id" element={<ProjectPage />} />
      </Route>  
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
