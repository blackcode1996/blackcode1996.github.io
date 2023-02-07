import { Box } from "@chakra-ui/react";
import styles from "./Styles/SkillCard.module.css";
export function SkillCard({ skill, icon, hover }) {
  return (
    <Box className={styles.card}>
      {icon}
      <Box  style={{color:"#1a202c"}}>{skill}</Box>
    </Box>
  );
}