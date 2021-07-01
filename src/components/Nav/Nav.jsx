import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className={styles.sticky}>
        <div className={styles.nav}>
          <Link to="/">
            <span>Students</span>
          </Link>
          <Link to="/courses">
            <span>Courses</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
