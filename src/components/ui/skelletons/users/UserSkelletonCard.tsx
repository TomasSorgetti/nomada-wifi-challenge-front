import styles from "./UserSkelletonCard.module.css";
import Skeleton from "@mui/material/Skeleton";

export default function UserSkelletonCard() {
  return (
    <div className={styles.card}>
      <div className={styles.userInfo}>
        <div className={styles.avatarCont}>
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{
              bgcolor: "var(--lightSkelletonColor)",
            }}
          />
          <Skeleton
            animation="wave"
            variant="text"
            width={60}
            height={30}
            sx={{
              bgcolor: "var(--lightSkelletonColor)",
            }}
          />
        </div>

        <Skeleton
          animation="wave"
          variant="text"
          width={80}
          height={20}
          sx={{
            bgcolor: "var(--lightSkelletonColor)",
          }}
        />
      </div>
      <div>
        <Skeleton
          animation="wave"
          variant="text"
          width={340}
          height={20}
          sx={{
            bgcolor: "var(--lightSkelletonColor)",
          }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width={40}
          height={20}
          sx={{
            bgcolor: "var(--lightSkelletonColor)",
          }}
        />
      </div>
    </div>
  );
}
