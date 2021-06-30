import React, { useState, useEffect } from "react";
import styles from "./StudentCreate.module.scss";

const StudentCreate = () => {
  const [newStudent, setNewStudent] = useState({});

  useEffect(() => {
    function createStudent(obj) {
      console.log(obj);
      fetch("http://localhost:8080/students", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log("Created new Student", data.html_url);
        });
    }

    createStudent(newStudent);
  }, [newStudent]);

  return (
    <>
      <div className={styles.pageContainer}>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("ding");

            let thisStudent = {};

            thisStudent.firstName = document.getElementById("firstName").value;
            thisStudent.lastName = document.getElementById("lastName").value;

            thisStudent.age = document.getElementById("age").value;

            thisStudent.location = document.getElementById("location").value;

            thisStudent.interests = document
              .getElementById("interests")
              .value.split(",");

            thisStudent.id = document.getElementById("id").value;

            setNewStudent(thisStudent);
          }}
        >
          <input type="text" placeholder="firstName" id="firstName"></input>
          <input type="text" placeholder="lastName" id="lastName"></input>
          <input type="text" placeholder="age" id="age"></input>
          <input type="text" placeholder="location" id="location"></input>
          <input
            type="text"
            placeholder="interests (seperate by comma)"
            id="interests"
          ></input>
          <input type="text" placeholder="id" id="id"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default StudentCreate;
