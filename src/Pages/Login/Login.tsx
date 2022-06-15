import styles from "./Login.module.css";
import SpotifyIcon from "./spotify.png";
import AUTH from "../../api/authorize";

const Login = () => {
  const url = AUTH();
  localStorage.setItem("artist", "");

  return (
    <div className={styles[`login-container`]}>
      <a href={url}>
        <div className={styles[`link-content`]}>
          <div className={styles.login}>Login</div>
          <div className={styles[`spotify-icon`]}>
            <img src={SpotifyIcon} alt="none" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Login;
