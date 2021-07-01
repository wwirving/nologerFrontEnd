import React from "react";
import styles from "./StudentCard.module.scss";

const StudentCard = (props) => {
  const { student } = props;

  return (
    <>
      <div className={styles.card}>
        <p>
          {student.firstName} {student.lastName}
        </p>
      </div>
    </>
  );
};

export default StudentCard;
