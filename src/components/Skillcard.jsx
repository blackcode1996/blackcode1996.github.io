import { Box } from "@chakra-ui/react";
import styles from "./Styles/SkillCard.module.css";
export function SkillCard({ skill, icon }) {
  return (
    <Box className={styles.card} _hover={{
          transform:"rotate(360deg) scale(1.5)",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, #44444C 0px -12px 30px, #44444C 0px 4px 6px,#44444C 0px 12px 13px, #44444C 0px -3px 5px",
          transitionDuration : "3s"
      }}>
      {icon}
      <Box
        style={{ color: "#1a202c" }}
        fontFamily={"'Nova Oval', cursive;"}
      >
        {skill}
      </Box>
    </Box>
  );
}
