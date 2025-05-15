import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h3>Contact</h3>
      <h4>
        {" "}
        Follow me for more projects on my github <br /> and topics about me on
        my social networks.
      </h4>
      <div className={styles.contact}>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="" />
          <a
            href="https://www.instagram.com/dev.joaovic/"
            className={styles.instagram}
          >
            Instagram
          </a>
        </div>
        <div>
          <img src="https://images.icon-icons.com/1826/PNG/512/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png" alt="" />
          <a
            href="mailto:fernandesjoaovictor836@gmail.com"
            className={styles.email}
          >
            Email
          </a>
        </div>
        <div>
          <img src="https://cdn.creazilla.com/icons/7915997/github-icon-lg.png" alt="" />
          <a href="https://github.com/Johnvic17" className={styles.github}>
            Github
          </a>
        </div>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" />
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-victor-cardozo-fernandes-508a612a7/"
            className={styles.linkedin}
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
