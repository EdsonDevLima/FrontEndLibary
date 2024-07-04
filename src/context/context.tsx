import { ReactNode, createContext, useState } from "react";
import {DataContext} from "../Types/DataContext"
import { useNavigate } from "react-router-dom";

//criaçao do contexto com os valores que seram passador no context
const Context = createContext<DataContext | null>(null)

const ContextProvider = ({children}:{children:ReactNode})=>{
    const [Id,setId] = useState<number>(0)
    const [UserName,setUserName] = useState<string>("")
    const [Email,setEmail] = useState<string>("")
    const [IsAutheticated,setIsAutheticated] = useState<boolean>(false)
    const Navigate = useNavigate()
    const Register = async(UserName:string,Email:string,Password:string,ConfirmPassword:string):Promise<void>=>{
        const request = await fetch("http://localhost:3000/auth/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({UserName,Email,Password,ConfirmPassword})})
        const response = await request.json()
        const token = await response.token
        if(token){
          await localStorage.setItem("token",JSON.stringify(token))
            console.log(response.message)
        }else{
            console.log(response.message)
        }
        
        
    }

    const Login = async (Email:string,Password:string):Promise<void>=>{
        const request = await fetch("http://localhost:3000/auth/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({Email,Password})})
        const response = await request.json()
        const token  = await response.token
        if(token){
            await localStorage.setItem("token",JSON.stringify(token))
            console.log(response.message)
        }else{
            console.log(response.message)
        }
    }
    const Logout = ()=>{
        localStorage.removeItem("token")
        Navigate("/login")
    }

    const requestTokenAutheticate = async (route:string)=>{
        const Datatoken =  localStorage.getItem("token")   
        if(Datatoken){
            const token = JSON.parse(Datatoken)
            const request = await fetch("http://localhost:3000/auth/getuser",{method:"POST",headers:{"Content-Type": "application/json"},body:JSON.stringify({token:token})})
            const response = await request.json()
            const user =  response.user
            console.log(user,response)
            if(user){
            setId(user.id)
            setUserName(user.UserName)
            setEmail(user.Email)
            setIsAutheticated(true)
            }else{
                console.log("usuario nao encontrado na requisiçao")
            }
        }else{
            console.log("token nao encontrado")
            Navigate(`/${route}`)
        }}
  
    return(
        <Context.Provider value={{Id,UserName,Email,IsAutheticated,Login,Register,requestTokenAutheticate,Logout}}>
            {children}
        </Context.Provider>
    )
}

export {Context,ContextProvider}