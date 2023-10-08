import { HStack } from "@chakra-ui/react";
import HomeLayout from "../components/LandingPage/HomeLayout";
import { Input ,InputRightElement ,InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const Dashboard = () => {
    // const [search , setSearch] = React.useState<string>("")
    // const handleSearch = ( value : string) => {
    //     console.log(value);
    // }
    // const searchRef = useRef<HTMLInputElement>(null);
    return (
        <HomeLayout>
            <HStack mx={[12,24,36]} my={[4,8,12]} justifyContent={"center"} > 
            <InputGroup width={'100%'} >
                <Input width={'100%'}  placeholder="Search..." />
                <InputRightElement
                borderLeft={`1px solid rgba(0, 0, 0, 0.2)`}
                cursor={`pointer`}          
                // onClick={() => handleSearch(search)}     
                >
                    <BsSearch />
                </InputRightElement>
            </InputGroup>
            </HStack>
        </HomeLayout>
    )
}
export default Dashboard;