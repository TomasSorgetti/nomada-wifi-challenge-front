"use client";

import { getCommentsByBreweryId } from "@/services/api";
import styles from "./Comments.module.css";
import Comment from "@/components/ui/comment/Comment";
import { IComment } from "@/interfaces/comments.interface";
import UserSkelletonCard from "@/components/ui/skelletons/users/UserSkelletonCard";
import { useEffect, useState } from "react";

export default function Comments() {
  //! Esta funcion se hace en el cliente para que tarde en cargar
  //! los comentarios y pueda mostrar los skelletons
  const [comments, setComments] = useState<IComment[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
      const response = await getCommentsByBreweryId();
      setComments(response);
    };
    fetchComments();
  }, []);

  return (
    <div className={styles.container}>
      {comments.length > 0 ? (
        comments?.map((comment: IComment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      ) : (
        <>
          <UserSkelletonCard />
          <UserSkelletonCard />
          <UserSkelletonCard />
          <UserSkelletonCard />
          <UserSkelletonCard />
        </>
      )}
    </div>
  );
}
