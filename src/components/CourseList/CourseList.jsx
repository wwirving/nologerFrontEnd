import React, { useEffect, useState } from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import styles from "./CourseList.module.scss";
import CourseCard from "../CourseCard/CourseCard";
import CourseDetails from "../CourseDetails/CourseDetails";

const CourseList = () => {
  const [courseList, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/courses")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setList(jsonResponse);
        console.log(jsonResponse);
      });
  }, []);

  const getCourseJSX = (course) => {
    return (
      <Link to={`/courses/${course.courseId}`}>
        <CourseCard course={course} />
        <div className={styles.line} />
      </Link>
    );
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <h1> Courses </h1>
        <div className={styles.cardContainer}>
          <Link to="/createCourse">
            <div className={styles.new}>
              <p>New +</p>
              <div className={styles.line} />
            </div>
          </Link>
          {courseList.map(getCourseJSX)}
        </div>
      </div>
    </>
  );
};

export default CourseList;
