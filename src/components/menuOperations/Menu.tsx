import Styles from "./Menu.module.css"
import logoMenu from "../../assets/barra-de-menu.png"
import { NavLink } from "react-router-dom"
import { useState } from "react"
const MenuMain = ()=>{
    const [display,setDisplay] = useState<boolean>(false)
    return(
    <div className={display ?  Styles.displayMenu : Styles.conteinerMenu }>
        <span className={Styles.iconeMenu} onClick={()=>display ? setDisplay(false) : setDisplay(true)}><img src={logoMenu}/></span>
        <div className={Styles.conteinerLinks}><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""} to={"/"}>Principal</NavLink></div>
        <div className={Styles.conteinerLinks}><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/books"}>Livros</NavLink></div>
        <div className={Styles.conteinerLinks}><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/categories"}>Categorias</NavLink></div>
        <div className={Styles.conteinerLinks}><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/publishers"}>Editoras</NavLink></div>
        <div className={Styles.conteinerLinks}><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/reports"}>Relatorios</NavLink></div>
        <div className={Styles.conteinerLinks}><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/sales"}>Vendas</NavLink></div>
        <div className={Styles.conteinerLinks}><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/stoks"}>Estoque</NavLink></div>
    </div>)
}

export default MenuMain