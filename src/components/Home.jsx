import {
  Image,
  Text,
  Flex,
  Stack,
  useMediaQuery,
  Button,
  useBreakpointValue,
  Heading,
  Box
} from "@chakra-ui/react";
import React from "react";
import { MdGradient } from "react-icons/md";
import wavinghand from "../Aseests/wavinghand.gif"
import resume from "../Aseests/Aakash_Mukherjee_Resume.pdf";

export const Home = () => {

  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'fp06_348_Aakash_Mukherjee_Resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
  <Box maxW={"100%"} id="Home">
    <Stack mt={{base:"50px",lg:"0px",md:"50px"}}   ml={{base:"-19px",lg:"100px",md:""}} minH={{base:"20vh",md:"50vh",lg:"100vh"}} direction={{ base: 'column', md: 'row' }}>
       <Flex  p={8} flex={1} align={'center'} justify={'center'}>
         <Stack spacing={7} w={'full'} maxW={'100%'} >
           <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} pl={"20px"}>
            <Flex>
              <Text color={"#fff"} fontSize="5xl" fontWeight="semibold">
                Hi, I am 
              </Text>
              <Image src={wavinghand} width={"60px"} height={"60px"}></Image>
            </Flex>
            <Flex fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text">
              Aakash Mukherjee
            </Flex>
            <Text
              as={'span'}
              position={'relative'}
              color={"white"}
              _after={{
                content: "''",
                width: '100%',
                height: useBreakpointValue({ base: '20%', md: '20%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                color:"blue",
                bgGradient:"linear(to-r,cyan.400,blue.500,purple.600)",
                xIndex: 1,
                opacity:"50%",
              }}>
              Full Stack MERN Developer
            </Text>
            <br />{' '}
          </Heading>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} pl={"20px"}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              onClick={handleDownload}
              _hover={{
                bg: 'blue.500',
              }}>
              Download Resume
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex  flex={1} align={"center"} justifyContent={"center"}>
          <Image
            border={"1px solid #0083B0"}
            ml={{base:"15px",lg:"",md:""}}
            mt={isNotSmallerScreen ? "0" : "15"}
            borderRadius="full"
            borderWidth={"10px"}
            borderStyle={"solid"}
            bgGradient='linear(to-r,cyan.400,blue.800,purple.600,blue.400)'
            maxH={"360px"}
            maxW={"360px"}
            boxSize={isNotSmallerScreen?"100px":"500px"}
            src="https://avatars.githubusercontent.com/u/110044436?v=4"
          />
      </Flex>
    </Stack>
  </Box> 
  );
};

