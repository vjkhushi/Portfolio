import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>
              Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and modern tools like React and Tailwind CSS, dedicated to crafting responsive and high-performance web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>UI</h3>
              <p>
              Passionate about UI, transforming creative ideas into intuitive and engaging digital experiences with clean, maintainable code.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Upskilling</h3>
              <p>
              Always learning and building, currently focused on real-world projects like live chat applications, portfolio websites, and interactive dashboards to sharpen my skills.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
