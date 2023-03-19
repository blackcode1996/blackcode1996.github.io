import {
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useMediaQuery,
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
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Flex id="About" align={"center"} justify={"center"} maxW={"100%"} pt={"40px"} m={"auto"}>
        <Heading mb={"50px"} fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}>
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
            About Me
          </Text>
        </Heading>
      </Flex>
      {/* main */}
      <Stack minH={{lg:"70vh"}} direction={{ base: "column", md: "row" }}>
        <Flex
          m={"auto"}
          mt={{md:"50px",base:"-30px"}}
          ml={{ md: "50px", lg: "100px",base:"10px" }}
          mr={{base:"10px"}}
          flex={1}
          align={"center"}
          justify={"center"}
        >
          <Text
            spacing={6}
            fontSize={{ base: "1xl", lg: "3xl", md: "2xl" }}
            color={"white"}
          >
            A tech-enthusiast, with 1000+ hours of hands-on coding & project
            experience in developing websites and has a robust problem-solving
            mindset which enables me to improve the performance, scalability,
            and reliability of any project assigned to me.Developed 20+ websites
            from scratch at Masai. Looking to further enhance my skills.
          </Text>
        </Flex>
        <Flex flex={1} height={"max-content"}>
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
    </>
  );
};

export default About;
