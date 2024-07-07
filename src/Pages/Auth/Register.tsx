import Styles from "./Register.module.css"
import LogoLogin from "../../../public/imgs/logologin.png"



//context
import { Context } from "../../context/context"
import { useContext, useState } from "react"
import { DataContext } from "../../Types/DataContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const Register = ()=>{
        //data
        const [UserName,setUserName] = useState<string>("")
        const [Email,setEmail] = useState<string>("")
        const [Password,setPassword] = useState<string>("")
        const [ConfirmPassword,setConfirmPassword] = useState<string>("")
        //context
        const authContext = useContext<DataContext | null>(Context)
        //
        const Navigate = useNavigate()
    
        const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault()

        if(authContext != null){
        const {Register} = authContext
        try{
            await Register(UserName,Email,Password,ConfirmPassword)
            setUserName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            Navigate("/")
            
        }catch(err){
            console.log(err)
        }
           
        }
        }
    return (
        <>

    <section className={Styles.sectionRegister}>
    <img src={LogoLogin} className={Styles.LogoLogin} />
    <form className={Styles.formRegister} onSubmit={handleSubmit}>
        <h1>Cadastrar-se</h1>
    <label><h1>Usuario</h1><input type="text" value={UserName} onChange={(e)=>setUserName(e.target.value)}/></label>
    <label><h1>Email</h1><input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)}/></label>
    <label><h1>Senha</h1><input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)}/></label>
    <label><h1>Confirmaçao de senha</h1><input value={ConfirmPassword} type="password"  onChange={(e)=>setConfirmPassword(e.target.value)}/></label>
    <input type="submit" value="Login"/>
    <Link to={"/login"}>Ja tenho Cadastro</Link>
    
</form>
</section>

</>



    )
}

export default Register