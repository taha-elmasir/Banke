import styles from "./Footer.module.css";

// Icons
import { Facebook, Twitter, Linkedin } from "../../icons/FooterIcons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_top}>
          <ul className={styles.footer_menu}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="https://github.com/taha-elmasir" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/taha-elmasir"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
          </ul>
          <div className={styles.footer__socials}>
            <Facebook />
            <Linkedin />
            <Twitter />
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.footer_info}>
            <p>
              Developed by Taha Elmasir | +201019668037 | tahaelmasir@gmail.com
            </p>
            <p>&copy; Banke {year}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
