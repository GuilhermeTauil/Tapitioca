import styles from "../../styles/navbar.module.css";
import Link from "next/link";

function nav() {
  return (
    <div className={styles.MainNav}>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link href="#section1">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="#section2">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="#section4">
              <a>Contato</a>
            </Link>
          </li>
          <li>
            <Link href="#section3">
              <a>Galeria</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default nav;
