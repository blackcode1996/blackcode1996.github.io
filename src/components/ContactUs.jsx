import { Fragment, useRef, useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  // useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
  useBreakpointValue,
  // color,
  useToast,
  Box,
  // border,
  Spinner,
} from "@chakra-ui/react";

// import { GoLocation } from "react-icons/go";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import emailjs from "@emailjs/browser";

const contactOptions = [
  {
    label: "Phone",
    // value:"9883398823",
    icon: BsPhone,
    href: "tel:9883398823",
  },
  {
    label: "Email",
    // value: 'aakashmukherjee1996@gmail',
    icon: HiOutlineMail,
    href: "mailto:aakashmukherjee1996@gmail.com",
  },
  {
    label: "Github",
    // value: 'github.com/blackcode1996',
    icon: BsGithub,
    href: "https://github.com/blackcode1996",
  },
  {
    label: "LinkedIn",
    // value: 'aakash-mukherjee-blackcode1996',
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/aakash-mukherjee-blackcode1996/",
  },
];

const Contact = () => {
  const form = useRef();
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_fj42j96",
        "template_5pfjagk",
        form.current,
        "jWOBZPEVycDtDO-CN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          toast({
            duration: 5000,
            isClosable: true,
            position: "top",
            containerStyle: {
              border: "5px solid #00FFFF",
              borderRadius: "10px",
            },
            render: () => (
              <Box
                color="white"
                p={3}
                bg={"#1a202c"}
                zIndex={1}
                position={"relative"}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <TiTick
                    fontSize={25}
                    style={{ backgroundColor: "#00FFFF", borderRadius: "20px" }}
                  />
                  <Box flex="1">
                    <Text textAlign="center" fontWeight={500} color="cyan.400">
                      Message sent.
                    </Text>
                  </Box>
                </Box>
                <Text>Thank You for contacting me. I will reach you soon.</Text>
              </Box>
            ),
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          toast({
            title: "Something went wrong!.",
            description: "please fill all input filed.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  }

  // console.log(loading);

  return (
    <Container
      zIndex={1}
      position={"relative"}
      maxW="7xl"
      py={10}
      px={{ base: 5, md: 8 }}
      id="Contact"
      maxH={"200vh"}
    >
      <Stack spacing={8}>
        <Flex align="center" justify="center" direction="column">
          <Heading
            mb={"30px"}
            align={"center"}
            justify={"center"}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <Text
              as={"span"}
              position={"relative"}
              color={"white"}
              fontFamily={"'Aboreto', cursive;"}
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
          <Text
            data-aos="fade-up"
            data-aos-duration="1000"
            fontSize="md"
            textAlign="center"
            color={"white"}
          >
            Open for feedback and making connections feel free to contact me
          </Text>
        </Flex>
        <Stack
          color={"white"}
          spacing={{ base: 6, md: 0 }}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack
                spacing={3}
                direction="column"
                justify="center"
                alignItems="center"
                px={3}
              >
                <a href={option.href} target={"_blank"}>
                  <Icon
                    as={option.icon}
                    w={10}
                    h={10}
                    color="cyan.400"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  />
                </a>
                <Text
                  color={"cyan.100"}
                  fontSize="lg"
                  fontWeight="semibold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {option.label}
                </Text>
                <Text fontSize="sm" textAlign="center" fontStyle={"italic"}>
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex d={{ base: "none", md: "flex" }}>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
        <form ref={form} onSubmit={sendEmail}>
          <VStack
            spacing={8}
            color={"#fff"}
            w="100%"
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
          >
            <VStack spacing={4} w="100%">
              <Stack
                w="100%"
                spacing={3}
                direction={{ base: "column", md: "row" }}
              >
                <FormControl id="name" isRequired data-aos="fade-right" data-aos-duration="1000">
                  <FormLabel>Name</FormLabel>
                  <Input
                    color={"#fff"}
                    bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                    type="text"
                    name="user_name"
                    placeholder="Enter Your Name"
                    rounded="md"
                    required
                    _placeholder={{ color: "white" }}
                    fontWeight={700}
                    border={"3px solid #00FFFF"}
                  />
                </FormControl>
                <FormControl id="email" isRequired data-aos="fade-left" data-aos-duration="1000">
                  <FormLabel>Email</FormLabel>
                  <Input
                    color={"#fff"}
                    bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                    type="email"
                    name="user_email"
                    placeholder="Enter Your Email-Id"
                    rounded="md"
                    required
                    _placeholder={{ color: "white" }}
                    fontWeight={700}
                    border={"3px solid #00FFFF"}
                  />
                </FormControl>
              </Stack>
              <FormControl id="message" isRequired data-aos="fade-down" data-aos-duration="1000">
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  color={"#fff"}
                  bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                  size="lg"
                  placeholder="Enter your message"
                  rounded="md"
                  required
                  _placeholder={{ color: "white" }}
                  fontWeight={700}
                  border={"3px solid #00FFFF"}
                />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Button 
                data-aos="fade-down" 
                data-aos-duration="1000"
                color={"white"}
                bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                _hover={{
                  color: "#00FFFF",
                  bg: "#fff",
                }}
                type="submit"
                rounded="md"
                p={"25px"}
                w={{ base: "100%", md: "max-content" }}
              >
                {loading && (
                  <Spinner
                    thickness="5px"
                    speed="0.5s"
                    emptyColor="#fff"
                    color="#00FFFF"
                    size="md"
                    m={"10px"}
                  />
                )}
                Send Message
              </Button>
            </VStack>
          </VStack>
        </form>
      </Stack>
    </Container>
  );
};

export default Contact;
