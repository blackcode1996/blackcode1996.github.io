import { Fragment } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
  useBreakpointValue,
  color
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import {BsGithub} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";

const contactOptions = [
  {
    label:"Phone",
    // value:"9883398823",
    icon:BsPhone,
    href:"tel:9883398823"
  },
  {
    label: 'Email',
    // value: 'aakashmukherjee1996@gmail',
    icon: HiOutlineMail,
    href:"mailto:aakashmukherjee1996@gmail.com",
  },
  {
    label:"Github",
    // value: 'github.com/blackcode1996',
    icon: BsGithub,
    href:"https://github.com/blackcode1996",
  },{
    label:"LinkedIn",
    // value: 'aakash-mukherjee-blackcode1996',
    icon: FaLinkedinIn,
    href:"https://www.linkedin.com/in/aakash-mukherjee-blackcode1996/",
  }
];

const Contact = () => {
  return (
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }} id="Contact">
      <Stack spacing={8}>
        <Flex align="center" justify="center" direction="column">      
        <Heading 
        mb={"30px"}
        align={"center"}
        justify={"center"}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        >
        <Text
          as={"span"}
          position={"relative"}
          color={"white"}
          _after={{
            content: "''",
            width: "100%",
            height: useBreakpointValue({ base: "20%", md: "20%" }),
            position: "absolute",
            bottom: 1,
            left: 0,
            color: "blue",
            bgGradient: "linear(to-r,cyan.400,blue.500,purple.600)",
            xIndex: 1,
            opacity: "50%",
          }}
        >
          Contact Me
        </Text>
      </Heading>
          <Text fontSize="md" textAlign="center" color={"white"}>
            Open for feedback and making connections feel free to contact me
          </Text>
        </Flex>
        <Stack
            color={"white"}
            spacing={{ base: 6, md: 0 }}
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack spacing={3} direction="column" justify="center" alignItems="center" px={3}>
                <a href={option.href} target={"_blank"}><Icon as={option.icon} w={10} h={10}  color="cyan.400"/></a>
                <Text color={'cyan.100'} fontSize="lg" fontWeight="semibold">
                  {option.label}
                </Text>
                <Text fontSize="sm" textAlign="center" fontStyle={"italic"}>
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex d={{ base: 'none', md: 'flex' }}>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
        <VStack
          as="form"
          spacing={8}
          color={"#fff"}
          w="100%"
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%"> 
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input color={"#fff"} bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"  type="text" placeholder="Enter Your Name" rounded="md"  _placeholder={{color:"white"}}/>
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input color={"#fff"} bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"  type="email" placeholder="Enter Your Email-Id" rounded="md" _placeholder={{color:"white"}}/>
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>Subject</FormLabel>
              <Input color={"#fff"} bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" type="text" placeholder="Enter the Subject" rounded="md" _placeholder={{color:"white"}}/>
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea color={"#fff"} bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"  size="lg" placeholder="Enter your message" rounded="md" _placeholder={{color:"white"}}/>
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
            color={"white"}
            bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
              _hover={{
                color: 'gray'
              }}
              rounded="md"
              w={{ base: '100%', md: 'max-content' }}
            >
              Send Message
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Contact;