import Styles from "./Login.module.css"
import LogoLogin from "../../../public/imgs/logologin.png"



//context
import { Context } from "../../context/context"
import { useContext , useState } from "react"
import { DataContext } from "../../Types/DataContext"
import { Link } from "react-router-dom"
//hooks
import { useNavigate } from "react-router-dom"

//lib de flashmessage
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
//configuraçao customizada das flash messages

import { ActiveFlashMessage } from "../../hooks/ActiveFlashMessage"


const Login = ()=>
{
    //data
    const [Email,setEmail] = useState<string>("")
    const [Password,setPassword] = useState<string>("")
    //context
    const authContext = useContext<DataContext | null>(Context)
    //
    const flashmessage = ActiveFlashMessage
    const Navigate = useNavigate()

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    if(authContext != null){
    const {Login} = authContext
    try{
        await Login(Email,Password)
        
    }catch(err){
        flashmessage(`${err}`,500)
    }
       
    }
    }

    const skipLogin = ()=>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsIkVtYWlsIjoiY29udmlkYWRvQGNvbnZpZGFkbyIsImlhdCI6MTcyMDUyMjY5Nn0.HMUPjRdWuaFe1Qs5lBIl8hjbHVaudaUM47pgZFFiFfM"
        localStorage.setItem("token",JSON.stringify(token))
        ActiveFlashMessage("Login efetuado",200)
        setTimeout(()=>{Navigate("/")},1000)
        
    }

    


    
    return(
<>
<section className={Styles.sectionLogin}>
    {/*conteiner*/}
    <ToastContainer/>
    <img src={LogoLogin} className={Styles.LogoLogin}/>  
    
<form className={Styles.formLogin} onSubmit={handleSubmit}>
    <h1>Acessar plataforma</h1>
    <label><h1>Email</h1><input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)}/></label>
    <label><h1>Senha</h1><input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)}/></label>
    <input type="submit" value="Login"/>
    <Link to={"/register"}>Ainda nao possui login?Cadastrar-se</Link>
</form>
    <button onClick={skipLogin}>Pular Login e registro</button>
</section>
</>
          )
        
}

export default Login