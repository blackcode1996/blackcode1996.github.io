import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  useDisclosure,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import resume from "../Aseests/Aakash_Mukherjee_Resume.pdf"

const Links = ['Home', 'About', 'Skills','Projects','Contact'];

const NavLink = ({ children }) => (
  <Link
    px={5}
    color={"#fff"}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.800',
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick=()=>{
    window.open(
      "https://drive.google.com/file/d/1DGs-bUVYzhtYaKHO6WVLHegLxLXubbdB/view?usp=sharing",
      "_blank"
    )
  }


  return (
    <Box>
      <Box bg={'gray.900'} pos={"fixed"} w={"100%"} top={0} zIndex={999}>
        <Flex maxW={"100%"} h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={1} alignItems={'center'}>
            <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Aakash</Heading>
          </HStack>
          <HStack
            as={'nav'}
            spacing={{md:2,lg:10,sm:0}}
            display={{ base: 'none', md: 'flex'}}
            fontSize={{ base: '0px', md: '10px', lg:'20px'}}
            >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <IconButton m={"auto"}  icon={<FaLinkedin/>} isRound='true' ></IconButton>
              <IconButton m={"auto"} ml={3} icon={<FaGithub/>} isRound='true' ></IconButton>
                <Link
                  target="_blank"
                  href={resume}
                  download={"Aakash_Mukherjee_Resume"}
                  _hover={{textDecoration:"none"}}
                >
                <Button
                  download={resume} 
                  onClick={()=>handleClick()}
                  variant={'solid'}
                  cursor={'pointer'}
                  color={"white"}
                  bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                  size={'md'}
                  ml={2}
                  mr={2}>
                  Resume
                </Button> 
                </Link>
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
    </Box>
  );
}