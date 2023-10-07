import SignUp from '../components/auth/Signup';

import HomeLayout from '../components/LandingPage/HomeLayout';

const Home = () =>{
    return(
        <div>
            <HomeLayout>
                <SignUp />
            </HomeLayout>
          
        </div>
    )
}

export default Home;