import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <p className={styles.contact_title}>Contact Us</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your E-mail" required />
          <textarea
            placeholder="Your message here"
            cols={50}
            rows={4}
            required
          ></textarea>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
