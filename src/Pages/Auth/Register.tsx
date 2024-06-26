import Styles from "./Register.module.css"
import LogoLogin from "../../../public/imgs/logologin.png"

//componentes
import LoginHeader from "../../components/auth/LoginHeader"
import FooterHeader from "../../components/auth/FooterHeader"
//context
import { Context } from "../../context/context"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../Types/DataContext"
const Register = ()=>{
        //data
        const [UserName,setUserName] = useState<string>("")
        const [Email,setEmail] = useState<string>("")
        const [Password,setPassword] = useState<string>("")
        const [ConfirmPassword,setConfirmPassword] = useState<string>("")
        //context
        const authContext = useContext<DataContext | null>(Context)
    
        const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault()

        if(authContext != null){
        const {Register} = authContext
        try{
            await Register(UserName,Email,Password,ConfirmPassword)
        }catch(err){
            console.log(err)
        }
           
        }
        }
    return (
        <>
        <LoginHeader/>
    <section className={Styles.sectionRegister}>
    <img src={LogoLogin} className={Styles.LogoLogin} />
    <form className={Styles.formRegister} onSubmit={handleSubmit}>
        <h1>Cadastrar-se</h1>
    <label><h1>Usuario</h1><input type="text" value={UserName} onChange={(e)=>setUserName(e.target.value)}/></label>
    <label><h1>Email</h1><input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)}/></label>
    <label><h1>Senha</h1><input type="text" value={Password} onChange={(e)=>setPassword(e.target.value)}/></label>
    <label><h1>Confirmaçao de senha</h1><input value={ConfirmPassword} type="text"  onChange={(e)=>setConfirmPassword(e.target.value)}/></label>
    <input type="submit" value="Login"/>
    
</form>
</section>
        <FooterHeader/>
</>



    )
}

export default Register