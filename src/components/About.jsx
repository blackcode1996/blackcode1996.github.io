import {
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  // useMediaQuery,
  Box,
} from "@chakra-ui/react";
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./about.css";

const About = () => {
  // const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <Box
      id="About"
      style={{
        maxHeight: "100vh",
        zIndex: 1,
        position: "relative",
        height: "100vh",
      }}
    >
      <Heading
        pt={"50px"}
        textAlign={"center"}
        mb={"50px"}
        fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}
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
          About Me
        </Text>
      </Heading>
      <Flex
        data-aos="fade-down"
        data-aos-duration="1000"
        maxW={"100%"}
        p={"50px"}
        m={"auto"}
      ></Flex>
      {/* main */}
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex
          data-aos="fade-right"
          data-aos-duration="1000"
          m={"auto"}
          mt={{ md: "10px", base: "-30px" }}
          ml={{ md: "50px", lg: "100px", base: "10px" }}
          mr={{ base: "10px" }}
          flex={1}
        >
          <Text
            spacing={6}
            fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}
            color={"white"}
          >
            A passionate tech-enthusiast web develpoer with 1300+ hours of
            hands-on experience from Masai School, specializing in developing
            scalable websites and applications. With an additional 1 year of
            practical experience, I have refined my skills in crafting seamless
            and responsive web experiences. Eager to bring my expertise and
            enthusiasm to organizations valuing innovation, dedication, and
            intellectual challenges. My goal is to contribute meaningfully to
            projects, leveraging my technical skills and commitment to
            excellence.
          </Text>
        </Flex>
        <Flex
          flex={1}
          height={"max-content"}
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Box
            className="stage-cube-cont"
            mt={{ base: "20%", md: "35%", lg: "10%" }}
            d={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box className="cubespinner">
              <Box className="face1">
                <FontAwesomeIcon icon={faGithub} color="#DD0031" />
              </Box>
              <Box className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </Box>
              <Box className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </Box>
              <Box className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </Box>
              <Box className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </Box>
              <Box className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default About;
