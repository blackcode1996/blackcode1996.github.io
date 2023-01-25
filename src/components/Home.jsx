import {
  Image,
  Box,
  Text,
  Circle,
  Flex,
  Stack,
  useColorMode,
  useMediaQuery,
  Button,
  useBreakpointValue,
  Heading,
  Spacer
} from "@chakra-ui/react";
import React from "react";

export const Home = () => {

  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <Stack margin={"auto"} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
       <Flex p={8} flex={1} align={'center'} justify={'center'}>
         <Stack spacing={7} w={'full'} maxW={'100%'} >
           <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} pl={"20px"}>
            <Flex>
              <Text fontSize="5xl" fontWeight="semibold">
                Hi, I am 
              </Text>
              <Image src="https://img.icons8.com/emoji/512/waving-hand-emoji.png" width={"70px"} height={"70px"}></Image>
            </Flex>
            <Flex fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text">
              Aakash Mukherjee
            </Flex>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: '100%',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bgGradient:"linear(to-r,cyan.400,blue.500,purple.600)",
                zIndex: -1,
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
              _hover={{
                bg: 'blue.500',
              }}>
              Download Resume
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={"center"} justifyContent={"center"}>
          <Image
            mt={isNotSmallerScreen ? "0" : "15"}
            borderRadius="full"
            borderWidth={"10px"}
            borderStyle={"solid"}
            bgGradient='linear(to-r,cyan.400,blue.800,purple.600,blue.400)'
            // boxShadow="lg"
            maxH={"350px"}
            maxW={"350px"}
            boxSize={isNotSmallerScreen?"100px":"500px"}
            src="https://avatars.githubusercontent.com/u/110044436?v=4"
          />
      </Flex>
    </Stack>
    
  );
};

