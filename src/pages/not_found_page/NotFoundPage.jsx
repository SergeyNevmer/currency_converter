import React from "react";
import styles from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerForInfo}>
        <h1>404</h1>
        <p>Oops! Something wrong…</p>
        <p>We can`t seem to find the page you`re looking for.</p>
      </div>
      <Link to="/" className={styles.link}>
        BACK TO HOME
      </Link>
    </div>
  );
};
