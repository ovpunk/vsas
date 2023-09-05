import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./dynamicposttextarea.module.scss";

function DynamicPostTextarea() {
  const [post, setPost] = useState();

  return (
    <TextareaAutosize
      className={styles.textarea}
      minRows={1} // Минимальное количество строк
      maxRows={20} // Максимальное количество строк
      placeholder="Что нового?"
      value={post}
      onChange={(e) => setPost(e.target.value)}
    />
  );
}

export default DynamicPostTextarea;
