import styles from "./MainSection.module.css";
import { scroll } from "../../lib";

// Images
import mainImg from "../../img/main-img.jpg";

const MainSection = (props) => {
  return (
    <section
      className={`${styles.main_section} ${!props.sticky && styles.sticky}`}
    >
      <div className={`container grid grid-2-col ${styles.content}`}>
        <div className={styles.text}>
          <h1>Safer, faster. Change your life forever</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat mattis finibus. Nulla vehicula faucibus fringilla. Duis
            finibus quam aliquam.
          </p>
          <div>
            <a className="btn btn-primary" onClick={props.onShowModal}>
              Start Your Journey
            </a>
            <a
              href="#how-section"
              className="btn btn-secondary"
              onClick={(e) => scroll(e)}
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
        <img src={mainImg} alt="mastercard" className={styles.img} />
      </div>
    </section>
  );
};

export default MainSection;
