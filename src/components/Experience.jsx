import {
  //   Container,
  //   Flex,
  Heading,
  Text,
  //   VStack,
  Box,
  useBreakpointValue,
  Flex,
  //   Stack,
  Badge,
  Container,
  List,
  ListItem,
  ListIcon,
  VStack,
  HStack,
  Image,
  //   Icon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaHourglass } from "react-icons/fa";
import Tracknerd_logo from "../Aseests/Tracknerd_Logo.png";
import Freelancing_Logo from "../Aseests/Freelancing_Logo.png";
import PureCode_Logo from "../Aseests/PureCode_Logo.png";

const Experience = () => {
  return (
    <Box
      mt={"70px"}
      id="Experience"
      h={"100%"}
      zIndex={1}
      position={"relative"}
    >
      <Heading
        pt={"50px"}
        data-aos="fade-down"
        align={"center"}
        justify={"center"}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
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
          Experience
        </Text>
      </Heading>
      <div style={{ marginTop: "20px", height: "80%" }}>
        <VerticalTimeline animate={"true"}>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="JUNE 2023 - JANUARY 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <Flex justifyContent={"center"} alignItems={"center"} p={"10px"}>
              <Heading
                data-aos="fade-down"
                // align={"center"}
                // justify={"center"}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                display={"flex"}
                flexDir={"row"}
              >
                <Image
                  //   border={"1px solid red"}
                  height={"60px"}
                  width={"60px"}
                  src={Tracknerd_logo}
                />
                <Text
                  //   border={"1px solid red"}
                  m="auto"
                  as={"span"}
                  position={"relative"}
                  color={"white"}
                  fontFamily={"'Aboreto', cursive;"}
                  _after={{
                    content: "''",
                    width: "100%",
                    height: useBreakpointValue({ base: "10%", md: "30%" }),
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    color: "blue",
                    bgGradient: "linear(to-r,#1b3c71,#c82c42)",
                    xIndex: 1,
                    opacity: "50%",
                  }}
                >
                  Tracknerd
                </Text>
              </Heading>
            </Flex>
            <Container textAlign={"left"} p={"0px"}>
              <Heading
                color={"#fff"}
                size={"lg"}
                // p="10px"
                fontFamily={"inherit"}
              >
                Role: <span style={{ color: "#fff" }}>Full Stack Engineer</span>
              </Heading>
              <Heading
                color={"#fff"}
                size={"lg"}
                // p="10px"
                fontFamily={"inherit"}
              >
                Responsibilites:
              </Heading>
              <List spacing={1} color="white.100">
                <ListItem fontSize={"15px"}>
                  <ListIcon as={MdCheckCircle} color={"blueviolet"} />
                  Designed{" "}
                  <a
                    href="https://crm.tracknerd.io/"
                    target="_blank"
                    style={{ color: "red" }}
                  >
                    CRM platform
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://lokkate.tracknerd.io/"
                    target="_blank"
                    style={{ color: "red" }}
                  >
                    real-time fleet management
                  </a>
                  application for vehicle owners.
                </ListItem>
                <ListItem fontSize={"15px"}>
                  <ListIcon as={MdCheckCircle} color={"blueviolet"} />
                  Collaborated with cross-functional teams to integrate various
                  software solutions seamlessly.
                </ListItem>
                <ListItem fontSize={"15px"}>
                  <ListIcon as={MdCheckCircle} color={"blueviolet"} />
                  Developed and implemented user interfaces, ensuring an
                  intuitive and engaging user experience.
                </ListItem>
                <ListItem fontSize={"15px"}>
                  <ListIcon as={MdCheckCircle} color={"blueviolet"} />
                  Optimized API calls and data fetching, enhancing application
                  performance.
                </ListItem>
                {/* <ListItem fontSize={"15px"}>
                  <ListIcon as={MdCheckCircle} color={"blueviolet"}/>
                  Wrote clean and maintainable code, following best practices
                  and coding standards.
                </ListItem> */}
              </List>
            </Container>
            <VStack p="10px" fontFamily={"sans-serif"}>
              <HStack>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  HTML
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  CSS
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  JavaScript
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  React Js
                </Badge>
              </HStack>
              <HStack>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  Redux
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  Sematic UI
                </Badge>
              </HStack>
            </VStack>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="FEBRUARY 2024 - MARCH 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <Flex justifyContent={"center"} alignItems={"center"} p={"10px"}>
              <Heading
                data-aos="fade-down"
                // align={"center"}
                // justify={"center"}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                display={"flex"}
                flexDir={"row"}
              >
                <Image
                  //   border={"1px solid red"}
                  height={"60px"}
                  width={"60px"}
                  src={Freelancing_Logo}
                />
                <Text
                  //   border={"1px solid red"}
                  m="auto"
                  as={"span"}
                  position={"relative"}
                  color={"white"}
                  fontFamily={"'Aboreto', cursive;"}
                  _after={{
                    content: "''",
                    width: "100%",
                    height: useBreakpointValue({ base: "10%", md: "30%" }),
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    color: "blue",
                    bgGradient: "linear(to-r,#1b3c71,#c82c42)",
                    xIndex: 1,
                    opacity: "50%",
                  }}
                >
                  Freelancing
                </Text>
              </Heading>
            </Flex>
            <Container textAlign={"left"} p={"0px"}>
              <Heading
                color={"#fff"}
                size={"lg"}
                // p="10px"
                fontFamily={"inherit"}
              >
                Role: <span style={{ color: "#fff" }}>Full Stack Engineer</span>
              </Heading>
              <Heading
                color={"#fff"}
                size={"lg"}
                // p="10px"
                fontFamily={"inherit"}
              >
                Responsibilites:
              </Heading>
              <List spacing={1} color="white.100">
                <ListItem fontSize={"15px"}>
                  <ListIcon as={MdCheckCircle} color={"blueviolet"} />
                  Worked on IoT-based sensor's data visualization project, React
                  based{" "}
                  <a
                    href="http://3.122.56.65/login"
                    target="_blank"
                    style={{ color: "red" }}
                  >
                    web application
                  </a>{" "}
                  for real-time location sharing.
                </ListItem>
              </List>
            </Container>
            <VStack p="10px" fontFamily={"sans-serif"}>
              <HStack>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  HTML
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  CSS
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  JavaScript
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  React Js
                </Badge>
              </HStack>
            </VStack>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="APRIL 2024 - JULY 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaBriefcase />}
          >
            <Flex justifyContent={"center"} alignItems={"center"} p={"10px"}>
              <Heading
                data-aos="fade-down"
                // align={"center"}
                // justify={"center"}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                display={"flex"}
                flexDir={"row"}
              >
                <Image
                  //   border={"1px solid red"}
                  height={"60px"}
                  width={"60px"}
                  src={PureCode_Logo}
                />
                <Text
                  //   border={"1px solid red"}
                  m="auto"
                  as={"span"}
                  position={"relative"}
                  color={"white"}
                  fontFamily={"'Aboreto', cursive;"}
                  _after={{
                    content: "''",
                    width: "100%",
                    height: useBreakpointValue({ base: "10%", md: "30%" }),
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    color: "blue",
                    bgGradient: "linear(to-r,#1b3c71,#c82c42)",
                    xIndex: 1,
                    opacity: "50%",
                  }}
                >
                  Purecode
                </Text>
              </Heading>
            </Flex>
            <Container textAlign={"left"} p={"0px"}>
              <Heading
                color={"#fff"}
                size={"lg"}
                // p="10px"
                fontFamily={"inherit"}
              >
                Role: <span style={{ color: "#fff" }}>React Developer</span>
              </Heading>
              <Heading
                color={"#fff"}
                size={"lg"}
                // p="10px"
                fontFamily={"inherit"}
              >
                Responsibilites:
              </Heading>
              <List spacing={1} color="white.100">
                <ListItem fontSize={"15px"}>
                  <ListIcon as={MdCheckCircle} color={"blueviolet"} />
                  Automated the testing process using Cypress.
                </ListItem>
                <ListItem fontSize={"15px"}>
                  <ListIcon as={MdCheckCircle} color={"blueviolet"} />
                  Collaborated with the product team to design the user
                  onboarding flow.
                </ListItem>
                <ListItem fontSize={"15px"}>
                  <ListIcon as={MdCheckCircle} color={"blueviolet"} />
                  Created and deployed {" "}
                  <a
                    href="https://purecode.ai/"
                    target="_blank"
                    style={{ color: "red" }}
                  >
                  user interfaces
                  </a> {" "} 
                   that provide an intuitive
                   and engaging experience.
                </ListItem>
                {/* <ListItem fontSize={"15px"}>
                  <ListIcon as={MdCheckCircle} color={"blueviolet"}/>
                  Wrote clean and maintainable code, following best practices
                  and coding standards.
                </ListItem> */}
              </List>
            </Container>
            <VStack p="10px" fontFamily={"sans-serif"}>
              <HStack>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  HTML
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  CSS
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  JavaScript
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  Next Js
                </Badge>
              </HStack>
              <HStack>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  Redux
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  Shadcn
                </Badge>
                <Badge
                  variant="subtle"
                  colorScheme="white"
                  p={"5px"}
                  rounded={"5px"}
                  color={"cyan"}
                >
                  Cypress
                </Badge>
              </HStack>
            </VStack>
          </VerticalTimelineElement>
          <div style={{ marginBottom: "-20px" }}>
            <VerticalTimelineElement
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<FaHourglass />}
            />
          </div>
        </VerticalTimeline>
      </div>
    </Box>
  );
};

export default Experience;
