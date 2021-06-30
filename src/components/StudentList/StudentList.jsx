import React, { useEffect, useState } from "react";
import styles from "./StudentList.module.scss";
import StudentCard from "../StudentCard";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import StudentDetails from "../StudentDetails";

const StudentList = () => {
  const [studentList, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setList(jsonResponse);
      });
  }, []);

  const getStudentJSX = (student) => {
    return (
      <Link to={`/${student.id}`}>
        <StudentCard student={student} />
      </Link>
    );
  };

  return (
    <>
      <Router>
        <div className={styles.pageContainer}>
          <h1> Students </h1>
          <div className={styles.cardContainer}>
            {studentList.map(getStudentJSX)}
            <Switch>
              <Route path="/:id" children={<StudentDetails />} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};

export default StudentList;
