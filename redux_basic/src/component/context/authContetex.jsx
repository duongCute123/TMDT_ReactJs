import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
const AuthContext=createContext()
const AuthContextProvider=({children})=>{
    const [curent,setCurent]=useState(JSON.parse(localStorage.getItem("user"))||"")
    const login=async(forms)=>{
        const res=await axios.post('http://localhost:8000/login',forms)
        setCurent(res.data)
    }
    const logout=async(forms)=>{
        const res=await axios.post("",forms)
        setCurent(null)
    }
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(curent))
    })
    return(
        <AuthContext.Provider value={{curent,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext,AuthContextProvider}