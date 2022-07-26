import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Logo</div>
      <ul>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#" className="btn btn-nav">
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
