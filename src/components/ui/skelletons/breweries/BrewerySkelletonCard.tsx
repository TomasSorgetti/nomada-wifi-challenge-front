import { Skeleton, Stack, SkeletonCircle } from "@chakra-ui/react";
import styles from "./BrewerySkelletonCard.module.css";
const BrewerySkelletonCard = () => {
  return (
    <Stack
      style={{
        width: "328px",
        padding: "1rem",
        backgroundColor: "var(--darkSkelletonColor)",
        borderRadius: "8px",
      }}
    >
      <Skeleton
        height="20px"
        width="160px"
        startColor="var(--lightSkelletonColor)"
        endColor="var(--darkSkelletonColor)"
        className={styles.skelleton}
      />
      <div className={styles.info}>
        <SkeletonCircle
          size="71"
          startColor="var(--lightSkelletonColor)"
          endColor="var(--darkSkelletonColor)"
        />
        <div className={styles.infoContent}>
          <Skeleton
            height="20px"
            width="160px"
            startColor="var(--lightSkelletonColor)"
            endColor="var(--darkSkelletonColor)"
            className={styles.skelleton}
          />
          <Skeleton
            height="20px"
            width="90px"
            startColor="var(--lightSkelletonColor)"
            endColor="var(--darkSkelletonColor)"
            className={styles.skelleton}
          />
        </div>
      </div>
      <div className={styles.buttonCont}>
        <Skeleton
          height="32px"
          width="244px"
          startColor="var(--lightSkelletonColor)"
          endColor="var(--darkSkelletonColor)"
          className={`${styles.button} ${styles.skelleton}`}
        />
      </div>
    </Stack>
  );
};

export default BrewerySkelletonCard;
