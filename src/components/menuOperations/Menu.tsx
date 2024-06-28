import Styles from "./Menu.module.css"
import { NavLink } from "react-router-dom"
const MenuMain = ()=>{
    return(
    <div className={Styles.conteinerMenu}>
        <div><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""} to={"/home"}>Principal</NavLink></div>
        <div><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/home/books"}>Livros</NavLink></div>
        <div><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/home/categories"}>Categorias</NavLink></div>
        <div><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/home/publishers"}>Editoras</NavLink></div>
        <div><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/home/reports"}>Relatorios</NavLink></div>
        <div><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/home/sales"}>Vendas</NavLink></div>
        <div><NavLink className={({ isActive }: { isActive: boolean;})=> isActive ? Styles.active : ""}  to={"/home/stoks"}>Estoque</NavLink></div>
    </div>)
}

export default MenuMain