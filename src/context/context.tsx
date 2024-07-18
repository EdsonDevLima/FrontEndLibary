import { ReactNode, createContext, useState } from "react";
import {DataContext} from "../Types/DataContext"
import { useNavigate } from "react-router-dom";
import { ActiveFlashMessage } from "../hooks/ActiveFlashMessage";

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

         if(token)
        {
          await localStorage.setItem("token",JSON.stringify(token))
          ActiveFlashMessage("Registro concluido com sucesso",200)
          setTimeout(()=>{Navigate("/")},1000)
        }
        else
        {
            ActiveFlashMessage(response.message,500)
        }       

        
    }

    const Login = async (Email:string,Password:string):Promise<void>=>{
        const request = await fetch("http://localhost:3000/auth/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({Email,Password})})
        const response = await request.json()
        const token  = await response.token
        if(token)
        {
            await localStorage.setItem("token",JSON.stringify(token))
            ActiveFlashMessage("Sucesso no login",200)
            setTimeout(() => {Navigate("/")},1000);

        }
        else
        {
            ActiveFlashMessage(`${response.message}`,500)
        }
    }
    const Logout = ()=>{
        localStorage.removeItem("token")
        ActiveFlashMessage("Logout efetuado",200)     
        setTimeout(()=>{Navigate("/login")},1000)     
        
    }

    const requestTokenAutheticate = async (route:string)=>{
        const Datatoken =  localStorage.getItem("token")   
        if(Datatoken){
            const token = JSON.parse(Datatoken)
            const request = await fetch("http://localhost:3000/auth/getuser",{method:"POST",headers:{"Content-Type": "application/json"},body:JSON.stringify({token:token})})
            const response = await request.json()
            const user =  response.user
            if(user){
            setId(user.id)
            setUserName(user.UserName)
            setEmail(user.Email)
            setIsAutheticated(true)
            }else{
                ActiveFlashMessage(`${response.message}`,500)
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