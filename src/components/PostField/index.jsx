import DynamicPostTextarea from "../DynamicPostTextarea";
import styles from "./postfield.module.scss";
import clip from "../../assets/icons/paperclip.svg";

export const PostField = () => {
  return (
    <div className={styles.field}>
      <form>
        <DynamicPostTextarea />
        <div className={styles.bottom_line}></div>
        <div className={styles.field_bottom}>
          <button className={styles.post_btn}>Опубликовать пост</button>
          <img src={clip} alt="Прикрепить документ" className={styles.clip} />
        </div>
      </form>
    </div>
  );
};
