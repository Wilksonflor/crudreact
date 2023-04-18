import React, {useState, useEffect} from "react"
import axios from 'axios';
import StudentForm from './StudentForm';



const CreateStudent = () => {
    const  [formValues, setFormValues] = useState({name:'', email: '', rollno: ''})
    const onSubmit = studentObject =>{
        axios.post(
            'http:localhost:4000/students/create-student', studentObject).then(res => {
                if(res.status === 200)
                alert('Aluno criado com sucesso')
                else
                Promise.reject()
            })
            .catch(err => alert('Algo deu errado'))
    }

    return(
        <StudentForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
            CreateStudent
        </StudentForm>
    )
}

export default CreateStudent