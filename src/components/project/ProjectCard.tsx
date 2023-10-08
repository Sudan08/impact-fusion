
import { Stack, Text, Button, VStack, HStack } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'

type ProjectCardProps = {
    project : {
    name : string
    description : string
    techStack : string[]
    rating : string
    }
}

export default function ProjectCard( { project } : ProjectCardProps ) {
    console.log(project.name);
    const {name , description , techStack , rating} = project;
    
  return (
    <Stack p="8" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold" fontSize={'3xl'}>{name}</Text>
      </Stack>

      <VStack justifyContent="flex-start" alignItems={"flex-start"}>
        <Text fontSize={{ base: 'md' }} textAlign={'left'} maxW={'4xl'}>
            {description}
        </Text>
        <HStack justifyContent={'space-between'} alignItems={'center'} gap={['2rem' , '4rem' , '24rem']}>
        <VStack alignItems={'flex-start'}>
            <HStack>
            {techStack?.map((tech , index) => (
                <Text key={index} fontSize={'sm'}>{tech}</Text>
            ))}
            </HStack>
            <HStack >
                <Text>Rating : </Text> 
                <AiFillStar /> 
                <Text>{rating}</Text>
            </HStack >
        </VStack>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button colorScheme="green">View Project</Button>
        </Stack>
        </HStack>
      </VStack>
    </Stack>
  )
}