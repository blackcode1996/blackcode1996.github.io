import { Box, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import left from "../Aseests/left.webp"
import right from "../Aseests/right.webp"


const Github = () => {
  return (
    <Box mt={"70px"}>
        <Heading
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
          Github Contribution
        </Text>
      </Heading>
      <Box textColor={"#fff"} mt={"60px"} ml={"20px"} mr={"20px"}  align={"center"} justify={"center"}>
        <GitHubCalendar blockMargin={8} blockRadius={10} blockSize={15} color="#0f6499" username="blackcode1996" />
      </Box>
      <Box mt={"20px"} justifyContent="center" display={"flex"}>
        <Image height={{lg:"200px",md:"150px",base:"100px"}} width={{lg:"150px",md:"150px",base:"80px"}}  src={left}/>
        <Image height={{lg:"400px",md:"200px",base:"100px"}} width={{lg:"400px",md:"300px",base:"200px"}}   src="https://github-readme-stats.vercel.app/api?username=blackcode1996&count_private=true&theme=blue&animations=true&width=100%" alt="Aakash_stats"/>
        <Image height={{lg:"200px",md:"150px",base:"100px"}} width={{lg:"150px",md:"150px",base:"80px"}}  src={right}/>
      </Box>
    </Box>
  )
}

export default Github