import Styles from "./Login.module.css"
import LogoLogin from "../../../public/imgs/logologin.png"



//context
import { Context } from "../../context/context"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../Types/DataContext"
import { Link } from "react-router-dom"
//hooks
import { useNavigate } from "react-router-dom"

const Login = ()=>
{
    //data
    const [Email,setEmail] = useState<string>("")
    const [Password,setPassword] = useState<string>("")
    //context
    const authContext = useContext<DataContext | null>(Context)
    const Navigate = useNavigate()

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    if(authContext != null){
    const {Login} = authContext
    try{
        await Login(Email,Password)
        Navigate("/books")
        
    }catch(err){
        console.log(err)
    }
       
    }
    }

    


    
    return(
<>
<section className={Styles.sectionLogin}>
    <img src={LogoLogin} className={Styles.LogoLogin} />    
<form className={Styles.formLogin} onSubmit={handleSubmit}>
    <h1>Acessar plataforma</h1>
    <label><h1>Email</h1><input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)}/></label>
    <label><h1>Senha</h1><input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)}/></label>
    <input type="submit" value="Login"/>
    <Link to={"/register"}>Ainda nao possui login?Cadastrar-se</Link>
    <button>Pular Login e registro</button>
</form>
</section>
</>
          )
        
}

export default Login