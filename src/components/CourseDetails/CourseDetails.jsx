import React, { useState, useEffect } from "react";
import styles from "./CourseDetails.module.scss";
import { useParams } from "react-router-dom";

const CourseDetails = (props) => {
  let { id } = useParams();

  const [course, setCourse] = useState({});

  useEffect(() => {
    console.log(id);
    fetch("http://localhost:8080/courses/" + id)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setCourse(jsonResponse);
      });
  }, [id]);

  return (
    <>
      <div className={styles.pageContainer}>
        <p>HELLO I AM WORKING</p>
        <p>Course Title: {course.name}</p>
        <p>Course Code: {course.courseId}</p>

        <button
          type="button"
          onClick={() => {
            fetch("http://localhost:8080/courses/" + id, {
              method: "delete",
            })
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                console.log("deleted course", data.html_url);
              });
          }}
        >
          Delete
        </button>
        <button type="button">Return</button>
      </div>
    </>
  );
};

export default CourseDetails;
