import styles from "./TestimonialItem.module.css";

const TestimonialItem = (props) => {
  return (
    <figure className={styles.testimonial}>
      <img
        src={props.img}
        alt={props.name}
        className={styles.testimonial_img}
      />
      <blockquote className={styles.testimonial_text}>{props.text}</blockquote>
      <p className={styles.testimonial_name}>{props.name}</p>
    </figure>
  );
};

export default TestimonialItem;
