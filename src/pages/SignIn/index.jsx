import { Link } from "react-router-dom";
import styles from "./signin.module.scss";
import { useForm } from "react-hook-form";

export const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Войти в VSAS</h1>
        <form onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            className={styles.field}
            placeholder="Имя пользователя"
            {...register("username")}
          />
          <input
            type="password"
            className={styles.field}
            placeholder="Папроль"
            {...register("password")}
          />
          <button className={styles.button}>Войти</button>
        </form>
        <p className={styles.sub_text}>
          Нет аккаунта? <Link to={"/signup"}>Зарегистрироваться.</Link>
        </p>
      </div>
    </div>
  );
};
