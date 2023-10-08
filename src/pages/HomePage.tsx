import Hero from '../components/LandingPage/Hero';
import FeatureUI from '../components/LandingPage/Feature';
import Stats from '../components/LandingPage/Stats';
import HomeLayout from '../components/LandingPage/HomeLayout';
import { useEffect , useState} from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { googleAuthenticate } from '../components/auth/googleAuth';

const Home = () =>{
    let location = useLocation();
    const [state , setState] = useState<string | null>(null);
    const [code , setCode] = useState<string | null>(null);

    if (state && code) {
        googleAuthenticate(state, code);
    }

    useEffect(() => {
        const getAccessToken = async () => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state.toString() : null;
        const code = values.code ? values.code.toString() : null;
        setState(state as string);
        setCode(code as string);
        }
        // if (state && code) {
        // }
        getAccessToken();
    }, [location]);
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