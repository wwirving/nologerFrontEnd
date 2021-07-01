import React, { useState, useEffect } from "react";
import styles from "./StudentDetails.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const StudentDetails = (props) => {
  let { id } = useParams();

  // const { student } = props.student;

  const [student, setStudents] = useState({});

  useEffect(() => {
    console.log(id);
    fetch("http://localhost:8080/students/" + id)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setStudents(jsonResponse);
      });
  }, [id]);

  return (
    <>
      <div className={styles.pageContainer}>
        <p>First Name: {student.firstName}</p>
        <p>Last Name : {student.lastName}</p>
        <p>Age: {student.age}</p>
        <p>Location: {student.location}</p>
        <p>Location: {student.interests && student.interests.join(", ")}</p>
        <Link to="/">
          <button
            type="button"
            onClick={() => {
              fetch("http://localhost:8080/students/" + id, {
                method: "delete",
              })
                .then(function (response) {
                  return response.json();
                })
                .then(function (data) {
                  console.log("deleted student", data.html_url);
                })
                .then(() => {
                  props.del();
                });
            }}
          >
            Delete
          </button>
        </Link>
        <button type="button">Return</button>
      </div>
    </>
  );
};

export default StudentDetails;
