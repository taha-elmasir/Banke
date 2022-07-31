import { useEffect, useRef } from "react";

import TestimonialItem from "./TestimonialItem";
import styles from "./Testimonials.module.css";
import { reveal } from "../../lib";

// images
import p1 from "../../img/testimonials/Dangelo Hahn.jpg";
import p2 from "../../img/testimonials/Erika Emard.jpg";
import p3 from "../../img/testimonials/Ellsworth Vandervort.jpg";
import p4 from "../../img/testimonials/Golden Raynor.jpg";

const Testimonials = () => {
  const testimonialRef = useRef();
  useEffect(() => reveal(testimonialRef), [testimonialRef]);

  return (
    <section
      id="testimonials-section"
      className={`${styles.testimonials} hidden`}
      ref={testimonialRef}
    >
      <div className="container">
        <p className="subheading"># Testimonials</p>
        <h2>What our clients say about us</h2>
        <div className={styles.testimonial_container}>
          <TestimonialItem
            img={p1}
            text="Ut porttitor, orci in dignissim ultrices, risus arcu vehicula nisi, at malesuada augue massa in quam. Suspendisse tincidunt massa libero."
            name="Dangelo Hahn"
          />
          <TestimonialItem
            img={p2}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus commodo suscipit. Cras pharetra justo mollis, cursus nisl porta."
            name="Erika Emard"
          />
          <TestimonialItem
            img={p3}
            text="Etiam placerat rhoncus metus. Duis lobortis, mauris eu imperdiet sollicitudin, magna felis maximus lacus, et blandit libero nisl ut mi."
            name="Ellsworth Vandervort"
          />
          <TestimonialItem
            img={p4}
            text="Fusce ac fermentum risus. Phasellus vestibulum magna ut tellus vestibulum, id venenatis felis pellentesque. Aliquam interdum."
            name="Golden Raynor"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
