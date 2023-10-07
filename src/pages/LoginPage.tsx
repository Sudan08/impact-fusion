import Login from '../components/auth/Login';

import HomeLayout from '../components/LandingPage/HomeLayout';

const LoginPage = () =>{
    return(
        <div>
            <HomeLayout>
                <Login />
            </HomeLayout>
          
        </div>
    )
}

export default LoginPage;