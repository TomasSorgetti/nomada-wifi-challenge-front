import { IComment } from "@/interfaces/comments.interface";
import styles from "./Comment.module.css";
import Avatar from "../avatar/Avatar";

interface ICommentProps {
  comment: IComment;
}
export default function Comment({ comment }: ICommentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <div className={styles.avatarCont}>
          <Avatar image={comment.avatar} />
          <h3>{comment.username}</h3>
        </div>
        <button className={styles.responder}>Responder</button>
      </div>
      <p>{comment.comment}</p>
    </div>
  );
}
