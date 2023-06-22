import axios from "axios";
import { createContext, useEffect, useState } from "react";
import configData from "../config.json";
export const AuthContext = createContext();

export const AuthContexProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  
    const login = async (inputs) => {
        const res = await axios.post(configData.SERVER_URL+'veifyLogin', inputs);// verific daca este logat utilizatorul
        setCurrentUser(res.data);
        localStorage.setItem("user", JSON.stringify(currentUser));
        setauthenticated(true);//daca e true o sa imi seteze in baza de date
        localStorage.setItem("authenticated", true);
    };

    const logout = async (inputs) => {
        alert('doriti sa va delogati?');
        const res = await axios.post(configData.SERVER_URL+'logout');
        setauthenticated(false);
        localStorage.setItem("authenticated", false);
        setCurrentUser(null);
        console.log(res.data);
    };

    useEffect(() => {// e functionalitatea care se executa automat cand se randeaza componenta
       // alert('context');
        if(currentUser != null) {
            localStorage.setItem("user", JSON.stringify(currentUser));
            setauthenticated(true);
            localStorage.setItem("authenticated", true);
        }
        else{
            localStorage.setItem("user", null);
            setauthenticated(false);
            localStorage.setItem("authenticated", false);
        }
       
    }, [currentUser]);// daca nu as fi pus nimic, era la infinit si intra intr-o  bucla de verifcare daca este logat

    return (
        <AuthContext.Provider value={{currentUser, login, logout, authenticated}}>
            {children}
        </AuthContext.Provider>
    );
};