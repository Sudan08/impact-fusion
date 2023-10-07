import Hero from '../components/LandingPage/Hero';
import FeatureUI from '../components/LandingPage/Feature';
import Stats from '../components/LandingPage/Stats';
import HomeLayout from '../components/LandingPage/HomeLayout';
const Home = () =>{
    return(
        <div>
            <HomeLayout>
                <Hero />
                <FeatureUI />
                <Stats />
            </HomeLayout>
          
        </div>
    )
}

export default Home;