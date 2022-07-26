import Nav from "./Nav";
import MainSection from "./MainSection";
import FeaturedIn from "./FeaturedIn";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <MainSection />
      <FeaturedIn />
    </header>
  );
};

export default Header;
