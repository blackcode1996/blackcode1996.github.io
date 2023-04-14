import { Box, Flex, Heading, HStack, IconButton, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { GrGithub, GrView } from "react-icons/gr";
import CarouselCard from "./CarousalCard";


const ProjectCard = (project) => {
    if(project.id%2===0){
        return (
            <Flex
              borderRadius={"20px"}
              alignItems="center"
              height={{ base: "100%", md: "300px" }}
              boxShadow= "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
              rounded={"lg"}
              flexDirection={{ base: "column-reverse", md: "row" }}
              bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
              color="#D6D6D6"
              p="2"
              _hover={{bg:"#D6D6D6", color:"#000000", transform:"scale(1.05)",transitionDuration : "1s", overflow:"hidden"}}
            >
              <VStack width={{ base: "100%", md: "70%" }} gap={"1"} p={4}>
                <Heading fontFamily={"'Nova Oval', cursive;"}>{project.title}</Heading>
                <Text>{project.description}</Text>
                <Text fontSize={12} fontWeight="extrabold">{project.subdescription}</Text>
                <Heading size="sm">
                  Tech Stack: <span style={{color:"cyan"}}>{project.techStack.join(", ")}</span>
                </Heading>
                <HStack gap="4">
                  <Link href={project.deployedURL} target={"_blank"}>
                    <IconButton  bg="#8C8C8C"   color="black" _hover={ {bg:"#D6D6D6", transform:"rotate(360deg) scale(1.5)",transitionDuration : "2s"}} aria-label="Go to website" icon={<GrView />} />
                  </Link>
                  <Link href={project.githubURL} target={"_blank"}>
                    <IconButton  bg="#8C8C8C"  color="black"  _hover={ {bg:"#D6D6D6", transform:"rotate(360deg) scale(1.5)",transitionDuration : "2s"}} aria-label="Show Code" icon={<GrGithub />} />
                  </Link>
                </HStack>
              </VStack>
              <Box width={{ base: "100%", md: "50%" }}>
                <CarouselCard images={project.images} />
              </Box>
            </Flex>
          );
    }else{
        return (
            <Flex
              borderRadius={"20px"}
              alignItems="center"
              height={{ base: "100%", md: "300px" }}
              boxShadow= "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
              rounded={"lg"}
              flexDirection={{ base: "column-reverse", md: "row" }}
              bgGradient="linear(to-r,cyan.400,blue.500,purple.600)"
              color="#D6D6D6"
              p="2"
              _hover={{bg:"#D6D6D6", color:"#000000", transform:"scale(1.05)",transitionDuration : "1s", overflow:"hidden"}}
            >
                <Box width={{ base: "100%", md: "50%" }}>
                <CarouselCard images={project.images} />
              </Box>
              <VStack width={{ base: "100%", md: "70%" }} gap={"2"} p={4}>
                <Heading fontFamily={"'Nova Oval', cursive;"}>{project.title}</Heading>
                <Text>{project.description}</Text>
                <Text fontSize={12} fontWeight="extrabold">{project.subdescription}</Text>
                <Heading size="sm">
                  Tech Stack: <span style={{color:"cyan"}}>{project.techStack.join(", ")}</span>
                </Heading>
                <HStack gap="4">
                  <Link href={project.deployedURL} target={"_blank"}>
                    <IconButton bg="#8C8C8C"  color="black"  _hover={ {bg:"#D6D6D6", transform:"rotate(360deg) scale(1.5)",transitionDuration : "2s"}} aria-label="Go to website" icon={<GrView />} />
                  </Link>
                  <Link href={project.githubURL} target={"_blank"}>
                    <IconButton bg="#8C8C8C" color="black"  _hover={ {bg:"#D6D6D6", transform:"rotate(360deg) scale(1.5)",transitionDuration : "2s"}} aria-label="Show Code" icon={<GrGithub />} />
                  </Link>
                </HStack>
              </VStack>
              
            </Flex>
          );
    }
  
};

export default ProjectCard;