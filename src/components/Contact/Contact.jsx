import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.content}>
        <h2 className={styles.title}>Contact Me</h2>
        <p>
          Please feel free to reach out. <br /> I am always seeking new
          opportunities!
        </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("icons/email.png")} alt="email icon" />
          <a href="mailto:aliciad925@gmail.com">aliciad925@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("icons/linkedin.png")} alt="linkedin icon" />
          <a href="https://www.linkedin.com/in/aliciaediller/">
            Check me out on LinkedIn!
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("icons/github.png")} alt="github icon" />
          <a href="https://github.com/AliciaD925">Check out my Github</a>
        </li>
      </ul>
    </footer>
  );
};
