import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  faAngular,
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
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  console.log(isDark)

  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <>
    <Flex align={"center"} justify={"center"} pt={"40px"}>
    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bgGradient:"linear(to-r,cyan.400,blue.500,purple.600)",
                zIndex: -1,
              }}>
                About Me
            </Text>
          </Heading>
          </Flex>
    {/* main */}
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Text fontSize={{ base: '2xl', lg: '2xl' }} color={isDark?"white":"black"}>
              A tech-enthusiast, with 1000+ hours of hands-on coding & project
              experience in developing websites and has a robust problem-solving
              mindset which enables me to improve the performance, scalability,
              and reliability of any project assigned to me.Developed 20+ websites from scratch at Masai.
              Looking to further enhance my skills.
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1} >
      <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faGithub} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div> 
      </Flex>
    </Stack>
    </>
  );
};

export default About;





