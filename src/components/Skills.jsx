import { SkillCard } from "./Skillcard";
import styles from "./Styles/SkillsSection.module.css";
import { GrReactjs } from "react-icons/gr";
import {
  SiRedux,
  SiJavascript,
  SiMaterialui,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiNpm,
  SiPostman,
  SiExpress,
  // SiVuedotjs,
  SiVite,
  SiChakraui,
  // SiVsco,
  SiVisualstudiocode,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiSemanticuireact,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";
import { FaBitbucket, FaGitAlt, FaGithub, FaJira, FaTrello } from "react-icons/fa";
// import { RiTeamFill } from "react-icons/ri";
// import { GiTeamUpgrade } from "react-icons/gi";
// import { MdConnectWithoutContact, MdReportProblem } from "react-icons/md";
// import { BsQuestionCircleFill } from "react-icons/bs";
import {
  Container,
  // Flex,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Skills() {
  return (
    <Container zIndex={1} h={"100%"} position={"relative"} maxH={"100%"} id="Skills" maxW={"90%"} >
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
          Skills
        </Text>
      </Heading>
      <Tabs
        align={"center"}
        mt={"80px"}
        justify={"center"}
        variant="soft-rounded"
        colorScheme="blue"
        
      >
        <TabList fontFamily={"'Nova Oval', cursive;"} m={"auto"} justifyContent={"space-evenly"} gap={"10px"} fontSize={{base:"5px"}}>
          <Tab data-aos="flip-left" color={"white"} bgGradient= "linear(to-r,cyan.400,blue.500,purple.600)" fontSize={{base:"10px",md:"15px",lg:"15px"}} width={{lg:"100px",base:"70px"}} height={{lg:"100px",base:"70px"}}>All</Tab>
          <Tab data-aos="flip-left" color={"white"} bgGradient= "linear(to-r,cyan.400,blue.500,purple.600)" fontSize={{base:"10px",md:"15px",lg:"15px"}} width={{lg:"100px",base:"70px"}} height={{lg:"100px",base:"70px"}}>Frontend</Tab>
          <Tab data-aos="flip-right" color={"white"} bgGradient= "linear(to-r,cyan.400,blue.500,purple.600)" fontSize={{base:"10px",md:"15px",lg:"15px"}} width={{lg:"100px",base:"70px"}} height={{lg:"100px",base:"70px"}}>Backend</Tab>
          <Tab data-aos="flip-right" color={"white"} bgGradient= "linear(to-r,cyan.400,blue.500,purple.600)" fontSize={{base:"10px",md:"15px",lg:"15px"}} width={{lg:"100px",base:"70px"}} height={{lg:"100px",base:"70px"}}>Tools</Tab>
        </TabList>
        <TabPanels>
          <TabPanel >
            <Grid
              w={"90%"}
              alignContent={"center"}
              justifyContent={"center"}
              gap={"20px"}
              // templateRows={"auto"}
              gridTemplateColumns={{
                lg: "repeat(6,1fr)",
                md: "repeat(4,1fr)",
                base: "repeat(2,1fr)",
              }}
              gridTemplateRows={"auto"}
              
            >
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="React"
                  icon={
                    <GrReactjs
                      className={`${styles.skillIcon} ${styles.SkillCard} ${styles.reactIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="Redux"
                  icon={
                    <SiRedux
                      className={`${styles.skillIcon} ${styles.reduxIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="JavaScript"
                  icon={
                    <SiJavascript
                      className={`${styles.skillIcon} ${styles.jsIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="TypeScript"
                  icon={
                    <SiTypescript
                      className={`${styles.skillIcon} ${styles.tsIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="Material UI"
                  icon={
                    <SiMaterialui
                      className={`${styles.skillIcon} ${styles.muiIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="Html"
                  icon={
                    <SiHtml5
                      className={`${styles.skillIcon} ${styles.htmlIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="Css"
                  icon={
                    <SiCss3
                      className={`${styles.skillIcon} ${styles.cssIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="Vite"
                  icon={
                    <SiVite
                      className={`${styles.skillIcon} ${styles.viteIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="Chakra UI"
                  icon={
                    <SiChakraui
                      className={`${styles.skillIcon} ${styles.chakraIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="Sematic UI"
                  icon={
                    <SiSemanticuireact
                      className={`${styles.skillIcon} ${styles.chakraIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="Bootstrap"
                  icon={
                    <SiBootstrap
                      className={`${styles.skillIcon} ${styles.bootstrapIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Tailwind"
                  icon={
                    <SiTailwindcss
                      className={`${styles.skillIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="Node"
                  icon={
                    <SiNodedotjs
                      className={`${styles.skillIcon} ${styles.nodeIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="MongoDb"
                  icon={
                    <SiMongodb
                      className={`${styles.skillIcon} ${styles.mongoIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="Express"
                  icon={
                    <SiExpress
                      className={`${styles.skillIcon} ${styles.mongoIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="Git"
                  icon={
                    <FaGitAlt
                      className={`${styles.skillIcon} ${styles.gitIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="Npm"
                  icon={
                    <SiNpm
                      className={`${styles.skillIcon} ${styles.gitIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="Postman"
                  icon={
                    <SiPostman
                      className={`${styles.skillIcon} ${styles.gitIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Vs Code"
                  icon={
                    <SiVisualstudiocode
                      className={`${styles.skillIcon} ${styles.vscodeIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Git"
                  icon={
                    <FaGithub
                      className={`${styles.skillIcon} ${styles.githubIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Bit Bucket"
                  icon={
                    <FaBitbucket
                      className={`${styles.skillIcon} ${styles.Bitbucket}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Jira"
                  icon={
                    <FaJira
                      className={`${styles.skillIcon} ${styles.jira}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Trello"
                  icon={
                    <FaTrello
                      className={`${styles.skillIcon} ${styles.trello}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Next.js"
                  icon={
                    <SiNextdotjs
                      className={`${styles.skillIcon} ${styles.githubIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Prisma"
                  icon={
                    <SiPrisma
                      className={`${styles.skillIcon}`}
                    />
                  }
                />
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
          <Grid
              w={"80%"}
              alignContent={"center"}
              justifyContent={"center"}
              gap={"20px"}
              gridTemplateColumns={{
                lg: "repeat(6,1fr)",
                md: "repeat(4,1fr)",
                base: "repeat(2,1fr)",
              }}
              gridTemplateRows={{ lg: "repeat(2,1fr)" }}
            >
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(94, 211, 243, 0.4) 0px 5px 20px 2px"}
                  skill="React"
                  icon={
                    <GrReactjs
                      className={`${styles.skillIcon} ${styles.SkillCard} ${styles.reactIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(118, 76, 183, 0.4) 0px 10px 20px 4px"}
                  skill="Redux"
                  icon={
                    <SiRedux
                      className={`${styles.skillIcon} ${styles.reduxIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(247, 223, 30, 0.4) 0px 10px 20px 4px"}
                  skill="JavaScript"
                  icon={
                    <SiJavascript
                      className={`${styles.skillIcon} ${styles.jsIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="TypeScript"
                  icon={
                    <SiTypescript
                      className={`${styles.skillIcon} ${styles.tsIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Next.js"
                  icon={
                    <SiNextdotjs
                      className={`${styles.skillIcon} ${styles.githubIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="Material Ui"
                  icon={
                    <SiMaterialui
                      className={`${styles.skillIcon} ${styles.muiIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  skill="Html"
                  icon={
                    <SiHtml5
                      className={`${styles.skillIcon} ${styles.htmlIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="Css"
                  icon={
                    <SiCss3
                      className={`${styles.skillIcon} ${styles.cssIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="Vite"
                  icon={
                    <SiVite
                      className={`${styles.skillIcon} ${styles.viteIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgb(77,200,196) 0px 10px 20px 4px"}
                  skill="Chakra UI"
                  icon={
                    <SiChakraui
                      className={`${styles.skillIcon} ${styles.chakraIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="Sematic UI"
                  icon={
                    <SiSemanticuireact
                      className={`${styles.skillIcon} ${styles.chakraIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  skill="Bootstrap"
                  icon={
                    <SiBootstrap
                      className={`${styles.skillIcon} ${styles.bootstrapIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Tailwind"
                  icon={
                    <SiTailwindcss
                      className={`${styles.skillIcon}`}
                    />
                  }
                />
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
          <Grid
              w={"80%"}
              alignContent={"center"}
              justifyContent={"center"}
              gap={"20px"}
              gridTemplateColumns={{
                lg: "repeat(6,1fr)",
                md: "repeat(4,1fr)",
                base: "repeat(2,1fr)",
              }}
              gridTemplateRows={{ lg: "repeat(2,1fr)" }}
            >
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(95, 151, 89, 0.4) 0px 10px 20px 4px"}
                  skill="Node"
                  icon={
                    <SiNodedotjs
                      className={`${styles.skillIcon} ${styles.nodeIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(82, 167, 75, 0.4) 0px 10px 20px 4px"}
                  skill="MongoDb"
                  icon={
                    <SiMongodb
                      className={`${styles.skillIcon} ${styles.mongoIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(82, 167, 75, 0.4) 0px 10px 20px 4px"}
                  skill="Express"
                  icon={
                    <SiExpress
                      className={`${styles.skillIcon} ${styles.mongoIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Prisma"
                  icon={
                    <SiPrisma
                      className={`${styles.skillIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Npm"
                  icon={
                    <SiNpm
                      className={`${styles.skillIcon} ${styles.gitIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Postman"
                  icon={
                    <SiPostman
                      className={`${styles.skillIcon} ${styles.gitIcon}`}
                    />
                  }
                />
              </GridItem>
            </Grid>
          </TabPanel>
          <TabPanel>
          <Grid
              w={"80%"}
              alignContent={"center"}
              justifyContent={"center"}
              gap={"20px"}
              gridTemplateColumns={{
                lg: "repeat(6,1fr)",
                md: "repeat(4,1fr)",
                base: "repeat(2,1fr)",
              }}
              gridTemplateRows={{ lg: "repeat(2,1fr)" }}
            >
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Git Alt"
                  icon={
                    <FaGitAlt
                      className={`${styles.skillIcon} ${styles.gitIcon}`}
                    />
                  }
                />
              </GridItem >
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Vs Code"
                  icon={
                    <SiVisualstudiocode
                      className={`${styles.skillIcon} ${styles.vscodeIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Git"
                  icon={
                    <FaGithub
                      className={`${styles.skillIcon} ${styles.githubIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Npm"
                  icon={
                    <SiNpm
                      className={`${styles.skillIcon} ${styles.gitIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-right">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Postman"
                  icon={
                    <SiPostman
                      className={`${styles.skillIcon} ${styles.gitIcon}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Bit Bucket"
                  icon={
                    <FaBitbucket
                      className={`${styles.skillIcon} ${styles.Bitbucket}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Jira"
                  icon={
                    <FaJira
                      className={`${styles.skillIcon} ${styles.jira}`}
                    />
                  }
                />
              </GridItem>
              <GridItem data-aos="flip-left">
                <SkillCard
                  hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
                  skill="Trello"
                  icon={
                    <FaTrello
                      className={`${styles.skillIcon} ${styles.trello}`}
                    />
                  }
                />
              </GridItem>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

