import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function FeatureUI() {
  return (
    <Box px={['8','16','36']} my={['4' , '6' ,'12']}>
      <Text textAlign={'center'} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} color={'blue.600'} my={12}>  Features </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Our Mission'}
          text={
            'We are developing a web application where users can upload their open-source projects, and contributors can participate in them if they wish. Our simple landing page contains essential content required for an effective introduction.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'User Actions'}
          text={
            'Users can create projects with basic details, and they also have a profile section where they can showcase their projects, skills, the projects they are following or own, and their areas of interest.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Project Actions'}
          text={
            'Our system tracks the number of projects created, projects followed, and projects contributed to by each user from the backend. For users who want to search for projects or explore them, we offer various filters to facilitate their search. '
          }
        />
      </SimpleGrid>
    </Box>
  )
}