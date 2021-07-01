import React, { useEffect, useState } from "react";
import styles from "./StudentList.module.scss";
import StudentCard from "../StudentCard";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import StudentDetails from "../StudentDetails";

const StudentList = (props) => {
  const [studentList, setList] = useState([]);

  const [isDeleted, setDeleted] = useState(false);

  const toggleDelete = () => {
    setDeleted(!isDeleted);
  };

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setList(jsonResponse);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setList(jsonResponse);
      });
  }, [props.del]);

  const getStudentJSX = (student) => {
    return (
      <Link to={`/students/${student.id}`}>
        <StudentCard student={student} />
        <div className={styles.line} />
      </Link>
    );
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <h1> Students </h1>
        <div className={styles.cardContainer}>
          <Link to="/createStudent">
            <div className={styles.new}>
              <p>New +</p>
              <div className={styles.line} />
            </div>
          </Link>
          {studentList.map(getStudentJSX)}
          {/* <Switch>
              <Route path="/:id" children={<StudentDetails />} />
            </Switch> */}
        </div>
      </div>
    </>
  );
};

export default StudentList;
