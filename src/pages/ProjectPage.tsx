import { projects } from "../data/fakeData";
import { HStack, Text, VStack , Avatar , Tag, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import HomeLayout from "../components/LandingPage/HomeLayout";
import { AiFillGithub } from "react-icons/ai";
import { IconButton } from "@chakra-ui/react";
import {AiFillRocket} from 'react-icons/ai';
import { AiFillFacebook } from "react-icons/ai";

const ProjectPage = () => {
    const { id } =useParams<{id : string}>();
    const filteredProject = projects.filter((project) => project.id === Number(id))[0];
    return (
        <div>
        <HomeLayout>
        <VStack my={10} justifyContent={'center'} alignItems={'flex-start'} px={['8','16','36']} >
            <HStack justifyContent={'space-between'} width={'100%'}>
                <Text fontSize={'3xl'}> Project Details </Text>
                <HStack>
                    <Button>
                        Follow
                    </Button>
                    <IconButton
                    colorScheme='blue'
                    aria-label='Search database'
                    icon={<AiFillRocket />}
/>
                </HStack>
            </HStack>
            <HStack justifyContent={'space-between'} gap={'10'} width={'100%'}>
                <Text fontSize={'2xl'}>Name : {filteredProject.name}</Text>
                <Text textAlign={'center'} fontSize={'2xl'}>Domain : <Tag variant={'solid'} colorScheme="green" size={'lg'}>{filteredProject.domain} </Tag></Text>
                <Text textAlign={'center'} fontSize={'2xl'}>Level : <Tag variant={'solid'} colorScheme="green" size={'lg'}>{filteredProject.level} </Tag></Text>
            </HStack>
            <HStack my={8} justifyContent={'space-between'} width={'100%'}>
                <VStack alignItems={'flex-start'}>
                <Text fontSize={'xl'}>Description</Text>
                <Text>{filteredProject.description}</Text>
                </VStack>
                <VStack mx={8}>
                <Text fontSize={'xl'}>Tech Stack</Text>
                </VStack>
            </HStack>
            <HStack justifyContent={"flex-start"} gap={32} width={"100%"}>
                <VStack alignItems={'flex-start'}>
                <Text fontSize={'xl'}>Links</Text>
                    <AiFillGithub size={44} />
                </VStack>
                <VStack>
                        <Text fontSize={'xl'}>Socials</Text>
                        <AiFillFacebook size={44} />
                </VStack>
            </HStack>
            <HStack my={'12'} justifyContent={'space-between'} width={"100%"}>
                <VStack>
                    <Text>Owner</Text>
                    <Avatar
                  size={'md'}
                  src={
                    'https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg'
                  }
                /> 
                </VStack>

                <VStack>
                    <Text>Contributers</Text>
                    <Avatar
                  size={'md'}
                  src={
                    'https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg'
                  }
                /> 
                </VStack>
            </HStack>
        </VStack>
        </HomeLayout>
        </div>
    )
}
export default ProjectPage;