import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.firstSection}>
          <ul className={styles.listLinks}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
                to="/"
              >
                Currency conversion
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
                to="/current_exchange_rate"
              >
                Current exchange rate
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
