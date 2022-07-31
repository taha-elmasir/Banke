import { useRef, useEffect } from "react";

import CardItem from "./CardItem";
import styles from "./Features.module.css";
import { reveal } from "../../lib";

// Images
import fee from "../../img/features/fee.png";
import transfers from "../../img/features/instant transfers.png";
import multicurrency from "../../img/features/multicurrency.png";

const Features = () => {
  const featureRef = useRef();
  useEffect(() => reveal(featureRef), [featureRef]);

  return (
    <section
      id="features-section"
      className={`${styles.features} hidden`}
      ref={featureRef}
    >
      <div className="container">
        <p className="subheading"># Features</p>
        <h2>Everything you need in a modern bank and more</h2>
        <div className={styles.feature_cards}>
          <CardItem
            img={fee}
            title="Zero-Fee"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu fringilla justo. Quisque a aliquam."
          />
          <CardItem
            img={transfers}
            title="Instant Transfers"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu fringilla justo. Quisque a aliquam."
          />
          <CardItem
            img={multicurrency}
            title="Multicurrency accounts"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu fringilla justo. Quisque a aliquam."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
