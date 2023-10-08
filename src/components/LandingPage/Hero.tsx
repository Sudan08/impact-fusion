
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react'



export default function Hero() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Funding Collaboration{' '}
          <Text as={'span'} color={'blue.600'}>
            for better future.
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your meetings and
          receive smart reminders in appropriate times. Read your smart “Daily Agenda”
          every morning.
        </Text>
        <Flex w={'full'} justifyContent={'center'} alignItems={'center'}>
          <Image src="/colab.png" alt="collaborative" height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 4, sm: 3 }} />
        </Flex>
      </Stack>
    </Container>
  )
}