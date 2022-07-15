import styles from "../../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.colab}>
      <div className={styles.col}>
        <Link href="https://github.com/guilhermetauil">
          <h2>
            <img src="/whattsapp_logo.png" className={styles.GitImg2} />
            whattsapp /{" "}
          </h2>
        </Link>
        <Link href="https://www.instagram.com/gui_tauil/">
          <h3>
            <img src="/instagram_ready.png" className={styles.GitImg} />
            Instagram
          </h3>
        </Link>
        <p>@2022</p>
      </div>
    </div>
  );
}
