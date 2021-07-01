import React from "react";
import styles from "./CourseCard.module.scss";

const CourseCard = (props) => {
  const { course } = props;

  return (
    <>
      <div className={styles.card}>
        <p>{course.name}</p>
      </div>
    </>
  );
};

export default CourseCard;
