import Styles from "./Login.module.css"
import LogoLogin from "../../../public/imgs/logologin.png"

//componentes
import LoginHeader from "../../components/auth/LoginHeader"
import FooterHeader from "../../components/auth/FooterHeader"
//context
import { Context } from "../../context/context"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../Types/DataContext"

const Login = ()=>
{
    //data
    const [Email,setEmail] = useState<string>("")
    const [Password,setPassword] = useState<string>("")
    //context
    const authContext = useContext<DataContext | null>(Context)

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    if(authContext != null){
    const {Login} = authContext
    try{
        await Login(Email,Password)
    }catch(err){
        console.log(err)
    }
       
    }
    }

    
    useEffect(()=>{
    if(!authContext){
        console.log("contexto nao encontrado")
    }
    },[])

    
    return(
<>
<LoginHeader/>
<section className={Styles.sectionLogin}>
    <img src={LogoLogin} className={Styles.LogoLogin} />    
<form className={Styles.formLogin} onSubmit={handleSubmit}>
    <h1>Acessar plataforma</h1>
    <label><h1>Email</h1><input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)}/></label>
    <label><h1>Senha</h1><input type="text" value={Password} onChange={(e)=>setPassword(e.target.value)}/></label>
    <input type="submit" value="Login"/>
</form>
</section>
<FooterHeader/>
</>
          )
        
}

export default Login