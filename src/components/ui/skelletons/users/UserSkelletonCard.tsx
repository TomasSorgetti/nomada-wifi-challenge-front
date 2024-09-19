import styles from "./UserSkelletonCard.module.css";
import { Skeleton, Stack, SkeletonCircle } from "@chakra-ui/react";

export default function UserSkelletonCard() {
  return (
    <Stack style={{ width: "100%", maxWidth: "600px" }}>
      <div className={styles.user}>
        <SkeletonCircle
          size="40px"
          startColor="var(--lightSkelletonColor)"
          endColor="var(--darkSkelletonColor)"
        />
        <Skeleton
          height="20px"
          width="90px"
          startColor="var(--lightSkelletonColor)"
          endColor="var(--darkSkelletonColor)"
        />
      </div>
      <div className={styles.textCont}>
        <Skeleton
          height="12px"
          width="100%"
          startColor="var(--lightSkelletonColor)"
          endColor="var(--darkSkelletonColor)"
        />
        <Skeleton
          height="12px"
          width="160px"
          startColor="var(--lightSkelletonColor)"
          endColor="var(--darkSkelletonColor)"
        />
      </div>
    </Stack>
  );
}

// <div className={styles.card}>
//   {/* <div className={styles.userInfo}>
//     <div className={styles.avatarCont}>
//       <Skeleton
//         variant="circular"
//         width={40}
//         height={40}
//         sx={{
//           bgcolor: "var(--lightSkelletonColor)",
//         }}
//       />
//       <Skeleton
//         animation="wave"
//         variant="text"
//         width={60}
//         height={30}
//         sx={{
//           bgcolor: "var(--lightSkelletonColor)",
//         }}
//       />
//     </div>

//     <Skeleton
//       animation="wave"
//       variant="text"
//       width={80}
//       height={20}
//       sx={{
//         bgcolor: "var(--lightSkelletonColor)",
//       }}
//     />
//   </div>
//   <div>
//     <Skeleton
//       animation="wave"
//       variant="text"
//       width={340}
//       height={20}
//       sx={{
//         bgcolor: "var(--lightSkelletonColor)",
//       }}
//     />
//     <Skeleton
//       animation="wave"
//       variant="text"
//       width={40}
//       height={20}
//       sx={{
//         bgcolor: "var(--lightSkelletonColor)",
//       }}
//     />
//   </div> */}
// </div>
