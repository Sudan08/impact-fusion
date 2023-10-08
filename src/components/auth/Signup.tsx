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
  HStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react';

type FormValues = {
    userName : string
    email : string   
    password : string    
}

export default function SignupCard() {
  const { register ,handleSubmit , formState:{errors }}  = useForm<FormValues>();
  const [showPassword, setShowPassword] = useState(false)
  const toast = useToast();
  const handleSignup = async ( values : FormValues) =>{
    fetch('http://172.105.62.58/auth/users/',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(values)
    })
    .then(function (){
      toast({
        title : "Account Created",
        description : "Please Login to continue",
        status : 'success',
        duration : 3000,
      });
    })
    .catch(function (){
      toast({
        title : "Account Creation Failed",
        status : 'error',
        duration : 3000,
      });
    })
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
            Sign up
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
        <form onSubmit={handleSubmit(handleSignup)}>
          <Stack spacing={4} >
            <Box>
                <FormControl id="userName" isInvalid={Boolean(errors.userName)}>
                  <FormLabel>UserName</FormLabel>
                  <Input type="text" { ...register('userName', {
                    required : 'This is required'
                  })} />
                  <FormErrorMessage>
                    {errors.userName && errors.userName.message}
                  </FormErrorMessage>
                </FormControl>
            </Box>
            <FormControl id="email" isInvalid={Boolean(errors.email)}>
              <FormLabel>Email address</FormLabel>
              <Input
                {...register("email", {
                    required: "Email is required",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 50 || "The email should have at most 50 characters",
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "Email address must be a valid address",
                    },
                  })}
                />
                <FormErrorMessage>
                    {errors.email && errors.email.message}
                </FormErrorMessage>
            </FormControl>
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
                {!showPassword ?<ViewIcon /> : < ViewOffIcon />}
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
                
                Sign up
              </Button>
            </Stack>
            <HStack pt={6} justifyContent={'center'}>
                 <Text> Already a User ?</Text> 
                 <Link to={'/login'}><Text color={'blue.400'}>Login</Text></Link>
              </HStack>
          </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}