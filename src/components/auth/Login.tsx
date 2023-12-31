import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Center,
  HStack,
  useToast
} from '@chakra-ui/react'
import {  useState } from 'react'
import { useForm } from 'react-hook-form'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
//   import apiUrl from '../../api/axiosConfig'
import { Link } from 'react-router-dom'
import { useLoginMutation } from './authApiSlice'
import { useAppDispatch } from '../../api/store'
import { setInitialCredentials } from './authSlice'
import { useNavigate } from 'react-router-dom'
// import queryString from 'query-string'
import { FcGoogle } from 'react-icons/fc'

type FormValues = {
  username: string
  email: string
  password: string
}

export default function SignupCard() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false)
  const toast = useToast();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = async (values: FormValues) => {
    try {
      const data: any = await login(values).unwrap();
      if (data.access) {
        dispatch(
          setInitialCredentials({
            accessToken: data.access,
            refreshToken: data.refresh,
            username: values.username,
          })
        )
        toast({
          title: "Account Login Success",
          status: 'success',
          duration: 3000,
        })
        navigate('/dashboard');
      }
    }
    catch (error) {
      toast({
        title: "Account Login Failed",
        status: 'error',
        duration: 3000,
      })
    }

  }

  const handleGoogleAuth = async () => {
    try {
      const response = await fetch(`https://nasa-hackathon.tnbswap.com/auth/o/google-oauth2/?redirect_uri=http://localhost:5173`);
      const data = await response.json();
      window.location.replace(data.authorization_url);
    }
    catch (error) {
      console.log(error);
      toast({
        title: "Account Login Failed",
        status: 'error',
        duration: 3000,
      })
    }
  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Log in
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          py={8}
          width={'max'}
          px={'16'}
        >
          <form onSubmit={handleSubmit(handleLogin)}>
            <Stack spacing={4} >
              <Box>
                <FormControl id="username" isInvalid={Boolean(errors.username)}>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" {...register('username', {
                    required: 'This is required'
                  })} />
                  <FormErrorMessage>
                    {errors.username && errors.username.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
              <FormControl isInvalid={Boolean(errors.password)}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    placeholder="********"
                    {...register('password', { required: 'Password is required' })}
                    type={showPassword ? 'text' : 'password'}
                  />
                  <InputRightElement
                    borderLeft={`1px solid rgba(0, 0, 0, 0.2)`}
                    cursor={`pointer`}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? <ViewIcon /> : < ViewOffIcon />}
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type="submit"
                >

                  Login
                </Button>
              </Stack>
              <HStack pt={6} justifyContent={'center'}>
                <Text> New user?</Text>
                <Link to={'/signup'}><Text color={'blue.400'}>SignUp</Text></Link>
              </HStack>
              <Stack>
              </Stack>
            </Stack>
          </form>
          <Button w={'full'} type='button' variant={'outline'} leftIcon={<FcGoogle />} onClick={handleGoogleAuth}>
            <Center>
              <Text>Sign in with Google</Text>
            </Center>
          </Button>
        </Box>
      </Stack>
    </Flex>
  )
}