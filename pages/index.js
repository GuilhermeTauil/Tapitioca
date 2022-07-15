import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "./components/navbar";
import Slide from "./components/slide";
import Footer from "./components/footer";
import SimpleMap from "./components/googlemaps";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tapitioca</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <Nav />
        <div className={styles.div1} id="section1"></div>
        <div className={styles.hero_text}>
          <h1>Tapitioca</h1>
          <p>Espaço para eventos</p>
        </div>
        <div className={styles.div2} id="section2">
          <h2> Sobre o Espaço</h2>
          <p>
            Ut ipsum veniam incididunt veniam consequat et consequat proident
            laborum dolore nostrud do. Incididunt duis nulla veniam do
            reprehenderit incididunt commodo est. Ut velit consequat nostrud
            enim deserunt. Velit aliquip incididunt laborum sunt deserunt duis
            et aute sit irure quis ex.
          </p>
        </div>
        <div className={styles.carrosel} id="section3">
          <Slide />
        </div>
        <div id="section4">
          <Footer />
        </div>
      </main>
    </div>
  );
}
