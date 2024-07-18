//assets

import Styles from "./HeaderAuth.module.css"
import { useContext, useState,useEffect } from "react"
import { Context } from "../../context/context"

import LogoProfile from "../../assets/profile.png"
import { ToastContainer } from "react-toastify"

const HeaderAuth = ()=>{
    const [userName,setUserName] = useState<string>("")
    const [Email,setEmail] = useState<string>("")
    const [displayLogout,setDisplayLogout] = useState<boolean>(false)
    const contextUser = useContext(Context)  
    useEffect(()=>{
        if(contextUser){
            const {UserName,Email} = contextUser
            setEmail(Email)
            setUserName(UserName)
        }

    },[contextUser])
    return (
    <header className={Styles.Header}>
                <img src={LogoProfile} onClick={()=> displayLogout?setDisplayLogout(false):setDisplayLogout(true)}/>
                {displayLogout &&        
            <div className={Styles.menuProfile}>
                <ToastContainer/>
                <p className={Styles.data}>Email:{Email}</p>
                <p className={Styles.data}>Usuario:{userName}</p>
                <p className={Styles.disable}>Mudar senha</p>
                <p className={Styles.disable}>Configuraçoes</p>
                <p className={Styles.disable}>Ajuda e suporte</p>
                <p onClick={contextUser?.Logout} className={Styles.logout}>Sair</p>
            </div>
                }
        
    </header>)



}


export default HeaderAuth