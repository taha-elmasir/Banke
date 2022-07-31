import styles from "./Nav.module.css";
import { scroll } from "../../lib";

const Nav = (props) => {
  return (
    <nav className={`${styles.nav} ${!props.sticky && styles.sticky}`}>
      <div className={styles.logo}>Logo</div>
      <ul className="nav-links" onClick={(e) => scroll(e)}>
        <li>
          <a href="#how-section">How it works</a>
        </li>
        <li>
          <a href="#features-section">Features</a>
        </li>
        <li>
          <a href="#testimonials-section">Testimonials</a>
        </li>
        <li>
          <a className="btn btn-nav" onClick={props.onShowModal}>
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
