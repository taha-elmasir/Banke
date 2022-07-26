import styles from "./MainSection.module.css";

import mainImg from "../../img/main-img.jpg";

const MainSection = () => {
  return (
    <section className={styles.main_section}>
      <div className={styles.text}>
        <h1>Safer, faster. Change your life forever</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          feugiat mattis finibus. Nulla vehicula faucibus fringilla. Duis
          finibus quam aliquam.
        </p>
        <div>
          <a href="#" className="btn btn-primary">
            Start Your Journey
          </a>
          <a href="#" className="btn btn-secondary">
            Learn More &rarr;
          </a>
        </div>
      </div>
      <img src={mainImg} alt="mastercard" className={styles.img} />
    </section>
  );
};

export default MainSection;
