import { useRef } from "react";
import styles from "./Nav.module.css";
import { scroll } from "../../lib";

// Icons
import { Menu, Close } from "../../icons/HeaderIcons";

const Nav = (props) => {
  const navRef = useRef();

  const openMenu = () => navRef.current.classList.add(styles.nav_open);
  const closeMenu = () => navRef.current.classList.remove(styles.nav_open);

  return (
    <nav
      className={`${styles.nav} ${!props.sticky && styles.sticky}`}
      ref={navRef}
    >
      <div className={styles.logo}>Logo</div>
      <ul className="nav-links" onClick={(e) => scroll(e)}>
        <li>
          <a onClick={closeMenu} href="#how-section">
            How it works
          </a>
        </li>
        <li>
          <a onClick={closeMenu} href="#features-section">
            Features
          </a>
        </li>
        <li>
          <a onClick={closeMenu} href="#testimonials-section">
            Testimonials
          </a>
        </li>
        <li>
          <a className="btn btn-nav" onClick={props.onShowModal}>
            Sign up
          </a>
        </li>
      </ul>
      <button className={styles.btn_nav}>
        <Menu onClick={openMenu} />
        <Close onClick={closeMenu} />
      </button>
    </nav>
  );
};

export default Nav;
