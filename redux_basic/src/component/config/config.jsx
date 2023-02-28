import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const useFetch=(url)=>{
    const [data,setData]=useState([])
    useEffect(()=>{
       const Fetchs=async()=>{
        try {
            const reponse =await fetch(url)
            const data=await reponse.json()
            setData(data)
        } catch (error) {
            console.log(error);
        }
       }
       Fetchs()
    },[url])
    return data
}
export {useFetch}