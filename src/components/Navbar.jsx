import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  useColorMode,
  Center,
  Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';

const Links = ['Home', 'About', 'Skills','Projects','Contact'];

const NavLink = ({ children }) => (
  <Link
    px={10}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {colorMode,toggleColorMode}=useColorMode();
  const isDark=colorMode==="dark";


  return (
    <>
      <Box bg={useColorModeValue('gray.200', 'gray.900')} px={5}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Aakash</Heading>
          </HStack>
          <HStack
            as={'nav'}
            spacing={6}
            display={{ base: 'none', md: 'flex'}}
            >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <IconButton ml={2} icon={<FaLinkedin/>} isRound='true' onClick={toggleColorMode}></IconButton>
              <IconButton ml={2} icon={<FaGithub/>} isRound='true' onClick={toggleColorMode}></IconButton>
              <IconButton ml={2} icon={isDark?<FaSun/>:<FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Button
                  variant={'solid'}
                  color={isDark?"white":"black"}
                  bgGradient={"linear(to-r,cyan.400,blue.500,purple.600)"}
                  size={'sm'}
                  ml={2}>
                  Resume
                </Button>
              </MenuButton>
              
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none'}}>
            <Stack as={'nav'} spacing={5}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
          
        ) : null}
      </Box>
    </>
  );
}