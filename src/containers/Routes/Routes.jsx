import React from "react";
import styles from "./Routes.module.scss";
import { Switch, Route } from "react-router-dom";
import StudentList from "../../components/StudentList";
import StudentDetails from "../../components/StudentDetails";
import StudentCreate from "../../components/StudentCreate";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <StudentList />
        </Route>
        <Route path="/student">
          <StudentDetails />
        </Route>
        <Route path="/create">
          <StudentCreate />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
