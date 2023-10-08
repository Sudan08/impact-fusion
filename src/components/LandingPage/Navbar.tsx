import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../api/store'
import { selectAccessToken } from '../auth/authSlice'
import { logout } from '../auth/authSlice'
import { useDispatch } from 'react-redux'

interface Props {
  children: React.ReactNode
}


const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  const isAuthenticated : string  =  useAppSelector(selectAccessToken) ?? "";
  const dispatch = useDispatch();

  return (
    <>
      <Box bg={'transparent'} px={['8','16','36']}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Link to="/">
              <Image src="./logo.svg" alt={'hamro_logo'} height={24} width={24} />
              </Link>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {isAuthenticated.length > 0 ? <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                 <Avatar
                  size={'md'}
                  src={
                    'https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg'
                  }
                /> 
             
              </MenuButton>
              <MenuList>
                <MenuItem>My Profile</MenuItem>
                <MenuItem>My Projects</MenuItem>
                <MenuItem onClick={() => dispatch(logout())}>Sign Out</MenuItem>
              </MenuList>
            </Menu> :    <Button colorScheme='blue' onClick={() => navigate("/signup")}>
                  SignUp
                </Button>}
            
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}