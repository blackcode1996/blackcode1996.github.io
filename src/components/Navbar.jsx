import {
  Box,
  Flex,
  HStack,
  // Link,
  IconButton,
  Button,
  Menu,
  useDisclosure,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../Aseests/Aakash_Mukherjee_Resume.pdf";
import { Link } from "react-scroll";
import "./navbar.css";

// const Links = ['Home', 'About', 'Skills','Projects','Contact'];

const Links = [
  { title: "Home", id: "Home" },
  { title: "About", id: "About" },
  { title: "Skills", id: "Skills" },
  { title: "Projects", id: "Projects" },
  { title: "Contact", id: "Contact" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1VqZwVQK7bAasYpIi7VRMalVq0VkTiz72/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <Box>
      <Box bg={"gray.900"} pos={"fixed"} w={"100%"} top={0} zIndex={999}>
        <Flex
          maxW={"100%"}
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={1} alignItems={"center"}>
            <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
              Aakash
            </Heading>
          </HStack>
          <HStack
            color={"#fff"}
            as={"nav"}
            spacing={{ md: 8, lg: "90px", sm: 0 }}
            display={{ base: "none", md: "flex" }}
            fontSize={{ base: "0px", md: "10px", lg: "20px" }}
            cursor={"pointer"}
            className="nav-content"
          >
            {Links.map((link, index) => (
              <Link
                spy={true}
                smooth={true}
                offset={-50}
                duration={900}
                to={link.id}
                key={index}
                className="nav-link"
              >
                {link.title}
                <span
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0",
                    height: "5px",
                    backgroundColor: "#00FFFF",
                    transition: "width 0.5s ease",
                  }}
                ></span>
              </Link>
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aakash-mukherjee-blackcode1996/"
              >
                <IconButton
                  m={"auto"}
                  icon={<FaLinkedin />}
                  isRound="true"
                ></IconButton>
              </a>
              <a target="_blank" href="https://github.com/blackcode1996">
                <IconButton
                  m={"auto"}
                  ml={3}
                  icon={<FaGithub />}
                  isRound="true"
                ></IconButton>
              </a>
              <a
                target="_blank"
                href={resume}
                download={"fp06_348_Aakash_Mukherjee_Resume"}
                _hover={{ textDecoration: "none" }}
              >
                <Button
                  download={resume}
                  onClick={() => handleClick()}
                  variant={"solid"}
                  cursor={"pointer"}
                  color={"white"}
                  bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                  size={"md"}
                  ml={2}
                  mr={2}
                >
                  Resume
                </Button>
              </a>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            cursor={"pointer"}
            color={"#fff"}
          >
            <Stack as={"nav"} spacing={5}>
              {Links.map((link, index) => (
                <Link
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={link.id}
                  key={index}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
