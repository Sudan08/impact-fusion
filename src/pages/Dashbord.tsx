import { HStack, VStack } from "@chakra-ui/react";
import HomeLayout from "../components/LandingPage/HomeLayout";
import { Input ,InputRightElement ,InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import ProjectCard from "../components/project/ProjectCard";
import { projects } from "../data/fakeData";


const Dashboard = () => {
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
            <VStack>
                {projects.map((project , index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </VStack>
        </HomeLayout>
    )
}
export default Dashboard;