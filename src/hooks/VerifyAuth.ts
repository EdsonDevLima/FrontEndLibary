import { Context } from "../context/context";

import { useContext,useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
 const VerifyAuth = ()=>{
const [isAuth,setIsAuth] = useState<boolean>(false)
const authContext = useContext(Context)  
const Navigate = useNavigate()  
if(authContext){
    const {IsAutheticated} = authContext
    setIsAuth(IsAutheticated)
}  
useEffect(()=>{
    if(!authContext){
        console.log("erro com o ocontext")

    }  



if(!isAuth){
    Navigate("/login")
}


},[[authContext, Navigate]])}

export default VerifyAuth