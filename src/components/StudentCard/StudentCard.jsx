import React from "react";
import styles from "./StudentCard.module.scss";

const StudentCard = (props) => {
  const { student } = props;

  return (
    <>
      <div className={styles.card}>
        <h1>{student.firstName}</h1>
      </div>
    </>
  );
};

export default StudentCard;
