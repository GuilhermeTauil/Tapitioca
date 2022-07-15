import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/Home.module.css";

function IndividualIntervalsExample() {
  return (
    <div className={styles.carroselmid}>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="img-thumbnail"
            alt="Second slide"
            src="https://i.postimg.cc/4NpyVZB0/tapitioca-festa.jpg"
          />
          <Carousel.Caption>
            <h3>Área da festa</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-thumbnail"
            alt="Third slide"
            src="https://i.postimg.cc/tJWq3tt6/tap-tioca.jpg"
          />

          <Carousel.Caption>
            <h3>Área da cerimonia</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
