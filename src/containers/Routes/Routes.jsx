import React, { useState } from "react";
import styles from "./Routes.module.scss";
import { Switch, Route } from "react-router-dom";
import StudentList from "../../components/StudentList";
import StudentDetails from "../../components/StudentDetails";
import StudentCreate from "../../components/StudentCreate";
import CourseList from "../../components/CourseList/CourseList";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import CourseCreate from "../../components/CourseCreate";

const Routes = () => {
  const [isDeleted, setDeleted] = useState(false);

  const toggleDelete = () => {
    setDeleted(!isDeleted);
  };

  return (
    <>
      <Switch>
        <Route path="/students/:id">
          <StudentDetails del={toggleDelete} />
        </Route>
        {/* <Route path="/student">
          <StudentDetails />
        </Route> */}

        <Route path="/createStudent">
          <StudentCreate />
        </Route>
        <Route path="/createCourse">
          <CourseCreate />
        </Route>
        <Route path="/courses/:id">
          <CourseDetails />
        </Route>
        <Route path="/courses">
          <CourseList />
        </Route>
        <Route exact path="/">
          <StudentList del={isDeleted} />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
