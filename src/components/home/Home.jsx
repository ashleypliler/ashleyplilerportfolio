import React from "react";
import styles from "./Home.module.css";
import {AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai';

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.name}>ASHLEY PLILER</div>
      <div className={styles.services}>
          <ul className={styles.skills}>
            <li>WEB DEVELOPMENT</li>
            <li>UX/UI DESIGN</li>
            <li>GRAPHIC DESIGN</li>
            <li>PHOTOGRAPHY</li>
            <li>VIDEOGRAPHY</li>
          </ul>
      </div>
      <div className={styles.links}>
        <ul className={styles.icons}>
            <a href="https://www.instagram.com/ashleypliler/?hl=en"><AiOutlineInstagram size={40}/></a>
            <a href="https://www.linkedin.com/in/ashley-pliler-862b5a193/"><AiFillLinkedin size={40}/></a>   
        </ul>
      </div>
    </div>
  );
};
