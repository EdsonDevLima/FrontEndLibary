import Styles from "./Menu.module.css"
import { Link } from "react-router-dom"
const MenuMain = ()=>{
    return(
    <div className={Styles.conteinerMenu}>
        <div><Link to={"/home"}>Principal</Link></div>
        <div><Link to={"/home/books"}>Livros</Link></div>
        <div><Link to={"/home/categories"}>Categorias</Link></div>
        <div><Link to={"/home/publishers"}>Editoras</Link></div>
        <div><Link to={"/home/reports"}>Relatorios</Link></div>
        <div><Link to={"/home/sales"}>Vendas</Link></div>
        <div><Link to={"/home/stoks"}>Estoque</Link></div>
    </div>)
}

export default MenuMain