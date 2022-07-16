import styles from "../../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.colab}>
      <div className={styles.col}>
        <Link href="https://github.com/guilhermetauil">
          <h2>
            <img src="/whattsapp_logo.png" className={styles.GitImg2} />
            whattsapp
          </h2>
        </Link>
        <Link href="https://www.instagram.com/gui_tauil/">
          <h3>
            <img src="/instagram_ready.png" className={styles.GitImg} />
            Instagram
          </h3>
        </Link>
        <Link href="https://www.google.com.br/maps/place/Nilópolis,+RJ/@-22.810056,-43.4330049,14z/data=!3m1!4b1!4m5!3m4!1s0x9961526f46bb6d:0xd2563dabf7a4ada2!8m2!3d-22.8098494!4d-43.4193916">
          <p>
            <img src="/maps_logo.png" className={styles.GitImg} />
            Como chegar lá?
          </p>
        </Link>
        <p>@2022</p>
      </div>
    </div>
  );
}
