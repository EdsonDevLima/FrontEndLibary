import Styles from "./Register.module.css"
import LogoLogin from "../../../public/imgs/logologin.png"

//componentes
import LoginHeader from "../../components/auth/LoginHeader"
import FooterHeader from "../../components/auth/FooterHeader"

const Register = ()=>{
    return (
        <>
        <LoginHeader/>
    <section className={Styles.sectionRegister}>
    <img src={LogoLogin} className={Styles.LogoLogin} />
    <form className={Styles.formRegister}>
        <h1>Cadastrar-se</h1>
    <label><h1>Usuario</h1><input type="text"/></label>
    <label><h1>Email</h1><input type="text"/></label>
    <label><h1>Senha</h1><input type="text"/></label>
    <label><h1>Confirmaçao de senha</h1><input type="text"/></label>
    <input type="submit" value="Login"/>
    
</form>
</section>
        <FooterHeader/>
</>



    )
}

export default Register