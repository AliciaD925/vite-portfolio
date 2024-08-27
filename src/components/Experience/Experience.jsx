import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skillItem}>
                <div className={styles.skillImg}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h2 className={styles.title}>Experience</h2>
      <ul className={styles.history}>
        {history.map((historyItem, id) => {
          return (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyDetails}>
                <h3>{`${historyItem.role}  |  ${historyItem.organization}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul key={id}>
                  {historyItem.experiences.map((experience, id) => {
                    return <li key={id}>{experience}</li>;
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
