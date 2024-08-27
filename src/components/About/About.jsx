import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h2 className={styles.title}>About</h2>
        <img
          className={styles.aboutImg}
          src={getImageUrl("desk-work.png")}
          alt="image of me at desk"
        />
      </div>
      <div className={styles.aboutItems}>
        <ul>
          <li className={styles.aboutItem}>
            <h3>Front End Development</h3>
            <p>
              I build webpages using HTML, CSS, JS and front end tools, such as
              React. Ensuring reponsive design on various screen sizes.
            </p>
          </li>
          <li className={styles.aboutItem}>
            <h3>UI\UX Optimization</h3>
            <p>
              I aim to optimize the user experience on all my front end
              development projects.
            </p>
          </li>
          <li className={styles.aboutItem}>
            <h3>Site Analytics</h3>
            <p>
              I set up site analytics to monitor and optimize site performance.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
