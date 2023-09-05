import styles from "./posts.module.scss";

export const Posts = () => {
  return (
    <div className={styles.posts}>
      <div className={styles.empty_wrapper}>
        <p>У вас пока нет постов...</p>
      </div>
    </div>
  );
};
