// CreateStudent Component for add new student
  
// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";
  
// CreateStudent Component
const CreateStudent = () => {
  const [formValues, setFormValues] = 
    useState({ name: '', email: '', rollno: '' })
  // onSubmit handler
  const onSubmit = studentObject => {
    axios.post(
'http://localhost:3000/create-student', 
    studentObject)
      .then(res => {
        if (res.status === 200)
          alert('Aluno criado com sucesso!')
        else
          Promise.reject()
      })
      .catch(err => alert('Algo deu errado'))
  }
    
  // Return student form
  return(
    <StudentForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Criar Aluno
    </StudentForm>
  )
}
  
// Export CreateStudent Component
export default CreateStudent