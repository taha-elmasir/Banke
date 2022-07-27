import { Fragment } from "react";

import styles from "./HowItWorksItem.module.css";

const HowItWorksItem = (props) => {
  if (props.order)
    return (
      <Fragment>
        <div className={styles.img_box_2}>
          <img src={props.img} alt={props.alt} />
        </div>
        <div className={styles.text_box}>
          <div className={styles.features_icon}>{props.icon}</div>
          <h3>{props.title}</h3>
          <p className={styles.description}>{props.description}</p>
        </div>
      </Fragment>
    );
  return (
    <Fragment>
      <div className={styles.text_box}>
        <div className={styles.features_icon}>{props.icon}</div>
        <h3>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
      </div>
      <div className={styles.img_box}>
        <img src={props.img} alt={props.alt} />
      </div>
    </Fragment>
  );
};

export default HowItWorksItem;
