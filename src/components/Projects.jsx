import { Heading, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard';
import projectsData from './projectData';

const Projects = () => {
  return (
    <div style={{marginTop:"100px" }} id="Projects" >
        <Heading 
        data-aos="fade-down"
        data-aos-duration="1000"
        mb={"30px"}
        align={"center"}
        justify={"center"}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        >
        <Text
          fontFamily={"'Aboreto', cursive;"}
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
          Projects
        </Text>
      </Heading>
      <VStack zIndex={1} position={"relative"} maxW="1000px" m="auto" id="projects" p="4" gap={"6"} pb="5%" pt="4%">
      {projectsData.map((project) => {
        return <ProjectCard  key={project.id} {...project} />;
      })}
    </VStack>
    </div>
  )
}

export default Projects