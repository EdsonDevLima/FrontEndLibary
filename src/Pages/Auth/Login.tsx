import Styles from "./Login.module.css"
import LogoLogin from "../../../public/imgs/logologin.png"

//componentes
import LoginHeader from "../../components/auth/LoginHeader"
import FooterHeader from "../../components/auth/FooterHeader"

const Login = ()=>
{
    return(
<>
<LoginHeader/>
<section className={Styles.sectionLogin}>
    <img src={LogoLogin} className={Styles.LogoLogin} />    
<form className={Styles.formLogin}>
    <h1>Acessar plataforma</h1>
    <label><h1>Email</h1><input type="text"/></label>
    <label><h1>Senha</h1><input type="text"/></label>
    <input type="submit" value="Login"/>
</form>
</section>
<FooterHeader/>
</>
          )
        
}

export default Login