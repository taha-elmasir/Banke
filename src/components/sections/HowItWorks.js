import { useRef, useEffect } from "react";

import HowItWorksItem from "./HowItWorksItem";
import styles from "./HowItWorks.module.css";
import { reveal } from "../../lib";

// Icons
import { CashIcon, GrowthIcon, UserIcon } from "../../icons/HowIcons";

// Images
import cash from "../../img/how it works/cash.png";
import growth from "../../img//how it works/growth.png";
import account from "../../img/how it works/account.png";

const HowItWorks = () => {
  const howRef = useRef();
  useEffect(() => reveal(howRef), [howRef]);

  return (
    <section
      id="how-section"
      className={`${styles.section_how} hidden`}
      ref={howRef}
    >
      <div className="container">
        <p className="subheading"># How it Works</p>
        <h2>More than you would expect from a modern bank</h2>
        <div className={styles.box}>
          <HowItWorksItem
            title="Let us simplify your payments"
            description="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque a leo aliquet, dapibus ligula ut, vestibulum felissque ."
            icon={<CashIcon />}
            img={cash}
            alt="Online Payments"
          />
          <HowItWorksItem
            order="1"
            title="Open your own account"
            description="Nullam eget dapibus quam, sit amet pharetra lectus. Pellentesque dignissim mi nec convallis rhoncus. Nullam laoreet velit urna, et ultrices justo tempus id."
            icon={<UserIcon />}
            img={account}
            alt="Open your own account"
          />
          <HowItWorksItem
            title="See how your money can grow"
            description="Phasellus id massa vel arcu accumsan convallis. Aliquam maximus mattis pretium. Nam ipsum libero, cursus ut risus quis, pellentesque tincidunt neque."
            icon={<GrowthIcon />}
            img={growth}
            alt="Increase your income"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
