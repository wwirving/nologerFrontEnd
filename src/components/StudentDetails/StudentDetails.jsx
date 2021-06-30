import React, { useState, useEffect } from "react";
import styles from "./StudentDetails.module.scss";
import { useParams } from "react-router-dom";

const StudentDetails = (props) => {
  let { id } = useParams();

  // const { student } = props.student;

  const [student, setStudents] = useState({});

  useEffect(() => {
    console.log(id);
    fetch("http://localhost:8080/students/" + id)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setStudents(jsonResponse);
      });
  }, [id]);

  return (
    <>
      <div className={styles.pageContainer}>
        <h3>{student.firstName}</h3>
        <h3>{student.lastName}</h3>
        <h3>{student.age}</h3>
        <h3>{student.location}</h3>
        <button
          type="button"
          onClick={() => {
            fetch("http://localhost:8080/delete-student/" + id, {
              method: "delete",
            })
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                console.log("Created new Student", data.html_url);
              });
          }}
        >
          Delete
        </button>
        {/* <h3>{student.interests[0]}{student.interests[1]}</h3> */}
      </div>
    </>
  );
};

export default StudentDetails;
