import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alicia</h1>
        <p className={styles.description}>
          I am an experienced front end developer passionate about creating
          engaging user experiences. With a strong foundation in HTML, CSS, and
          JavaScript, I specialize in building responsive and interactive
          websites that not only look great but also perform seamlessly.
        </p>
        <a className={styles.contactBtn} href="mailto:aliciad925@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("heroImg.jpg")}
        alt="image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
