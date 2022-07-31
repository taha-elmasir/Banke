import styles from "./Nav.module.css";

const Nav = (props) => {
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
          <a className="btn btn-nav" onClick={props.onShowModal}>
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
