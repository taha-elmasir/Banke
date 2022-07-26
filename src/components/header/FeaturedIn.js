import styles from "./FeaturedIn.module.css";

import usaToday from "../../img/featured in/usa-today.png";
import businessInsider from "../../img/featured in/business-insider.png";
import forbes from "../../img/featured in/forbes.png";
import techcrunch from "../../img/featured in/techcrunch.png";
import washingtonPost from "../../img/featured in/the-washington-post.png";

const FeaturedIn = () => {
  return (
    <section className={styles.featured_in}>
      <p className={styles.featured_in__title}>Featured In</p>
      <div className={styles.featured_in__img}>
        <img src={techcrunch} alt="techcrunch" />
        <img src={businessInsider} alt="business insider" />
        <img src={usaToday} alt="usa today" />
        <img src={forbes} alt="forbes" />
        <img src={washingtonPost} alt="washington post" />
      </div>
    </section>
  );
};

export default FeaturedIn;
