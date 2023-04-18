import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

const EditStudent = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  const onSubmit = (studentObject) => {
    axios
      .put(
        "http://localhost:4000/students/update-student" + props.match.params.id,
        studentObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Aluno editado com sucesso");
          props.history.push("./Student-list.component.js");
        } else Promise.reject();
      })
      .catch((err) => alert("Algo de errado!"));
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/students/update-student/" + props.match.params.id
      )
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email, rollno });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Student
    </StudentForm>
  );
};


export default EditStudent;
