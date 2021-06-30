import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className={styles.sticky}>
        <div className={styles.nav}>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/create">
              <li>Create</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
