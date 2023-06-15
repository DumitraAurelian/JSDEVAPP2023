// CreateUser Component for add new user
//  folosesc user/form dar sa vedemm unde il folosim. Il gasim la return. Preiau valorile si cand dau submit. facem o metoda on submit. Dar inainte de asta avem use navigate ca sa stie
// Import Modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import UserForm from "./UserForm";
import configData  from "../config.json";
// CreateUser Component
const CreateUser = () => {
    let navigate = useNavigate();	// este un fel de redirect
    const [formValues] =
        useState({ nume: '',prenume:'', email: '', telefon: '', cnp:'', datanastere:'' })
    // onSubmit handler
    const onSubmit = userObject => {
        axios.post(
            configData.SERVER_URL,
            userObject)
            .then(res => {
                // daca totul e ok si statusul e 200 adica ok, apare un mesaj de alerta si apoi prin navigate merge la lista de useri
                if (res.status === 200){
                    alert('User successfully created');
                    navigate("/user-list");
                }
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }

    // Return user form
    return (
        <UserForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize >
            Create User
        </UserForm>
    )
}

// Export CreateUser Component
export default CreateUser