import styles from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <div className={styles.feature}>
      <img src={props.img} alt={props.title} />
      <h4>{props.title}</h4>
      <p className={styles.feature_description}>{props.description}</p>
      <a href="#" className={`btn ${styles.feature_btn}`}>
        Learn More
      </a>
    </div>
  );
};

export default CardItem;
