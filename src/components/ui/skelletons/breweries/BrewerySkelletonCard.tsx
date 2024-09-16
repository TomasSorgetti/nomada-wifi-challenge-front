import Skeleton from "@mui/material/Skeleton";
import styles from "./BrewerySkelletonCard.module.css";
const BrewerySkelletonCard = () => {
  return (
    <div className={styles.card}>
      <Skeleton
        animation="wave"
        variant="rounded"
        width={328}
        height={191}
        sx={{
          bgcolor: "var(--darkSkelletonColor)",
          radius: "8px",
          minWidth: 328,
        }}
      />
      <div className={styles.contentContainer}>
        <Skeleton
          animation="wave"
          variant="text"
          width={120}
          height={32}
          sx={{
            bgcolor: "var(--lightSkelletonColor)",
          }}
        />
        <div className={styles.infoContainer}>
          <Skeleton
            variant="circular"
            width={71}
            height={71}
            sx={{
              bgcolor: "var(--lightSkelletonColor)",
            }}
          />
          <div>
            <Skeleton
              animation="wave"
              variant="text"
              width={120}
              height={32}
              sx={{
                bgcolor: "var(--lightSkelletonColor)",
              }}
            />
            <Skeleton
              animation="wave"
              variant="text"
              width={120}
              height={32}
              sx={{
                bgcolor: "var(--lightSkelletonColor)",
              }}
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Skeleton
            animation="wave"
            variant="text"
            width={244}
            height={58}
            sx={{
              bgcolor: "var(--lightSkelletonColor)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BrewerySkelletonCard;
