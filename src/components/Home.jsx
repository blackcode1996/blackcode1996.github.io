import {
  Image,
  Text,
  Flex,
  Stack,
  useMediaQuery,
  Button,
  useBreakpointValue,
  Heading,
  Box,
} from "@chakra-ui/react";
import React from "react";
import wavinghand from "../Aseests/wavinghand.gif";
import resume from "../Aseests/Aakash_Mukherjee_Resume.pdf";
import { animations, motion } from "framer-motion";
import ParticleBackground from "../ParticleBackground";
import "./Home.css";

export const Home = () => {
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "fp06_348_Aakash_Mukherjee_Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      maxW={"100%"}
      id="Home"
      maxH={"100vh"}
      mt={{ base: "50px", lg: "0px", md: "50px" }}
    >
      <Stack
        zIndex={1}
        position={"relative"}
        ml={{ base: "-19px", lg: "100px" }}
        minH={{ base: "20vh", md: "vh", lg: "85vh" }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Stack
              spacing={7}
              w={"full"}
              maxW={"100%"}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Heading
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                pl={"20px"}
              >
                <Flex>
                  <Text
                    color={"#fff"}
                    fontSize="5xl"
                    fontWeight="semibold"
                    fontFamily={"`Philosopher', sans-serif"}
                  >
                    Hi, I am
                  </Text>
                  <Image
                    src={wavinghand}
                    width={"60px"}
                    height={"60px"}
                  ></Image>
                </Flex>
                <Flex
                  fontFamily={"Philosopher"}
                  fontSize="6xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
                  bgClip="text"
                >
                  Aakash Mukherjee
                </Flex>
                <Text
                  fontFamily={"Philosopher"}
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
                  Full Stack MERN Developer
                </Text>
                <br />{" "}
              </Heading>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                pl={"20px"}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="2000"
              >
                <Button
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  onClick={handleDownload}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Download Resume
                </Button>
              </Stack>
            </Stack>
          </motion.div>
        </Flex>
        <Flex flex={1} align={"center"} justifyContent={"center"}  className="box">
          <Box 
            class="content"
            position={"relative"}
            width={"auto"}
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <Image
              className="image"
              border={"5px solid #fff"}
              ml={{ base: "15px", lg: "", md: "" }}
              mt={isNotSmallerScreen ? "0" : "15"}
              borderRadius="50%"
              borderWidth={"10px"}
              borderStyle={"dotted"}
              bgGradient="linear(to-r,cyan.400,blue.800,purple.600,blue.400)"
              maxH={"360px"}
              maxW={"360px"}
              boxSize={isNotSmallerScreen ? "100px" : "500px"}
              src="https://avatars.githubusercontent.com/u/110044436?v=4"
            />
             <h2>Aakash Mukherjee<br/><span>MERN Developer</span></h2>
            <a href="">Hire me</a>
          </Box>
        </Flex>
      </Stack>
      <ParticleBackground />
    </Box>
  );
};
