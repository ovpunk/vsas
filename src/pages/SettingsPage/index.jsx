import { useNavigate } from "react-router-dom";
import styles from "./settingspage.module.scss";
import { useAuth } from "../../hooks/useAuth";

export const SettingsPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };
  useAuth();

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClick} className={styles.button}>
        Выйти
      </button>
    </div>
  );
};
