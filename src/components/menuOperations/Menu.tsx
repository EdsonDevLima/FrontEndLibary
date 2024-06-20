import Styles from "./Menu.module.css"

const MenuMain = ()=>{
    return(
    <div className={Styles.conteinerMenu}>
        <div>Principal</div>
        <div>Livros</div>
        <div>Editorar</div>
        <div>Categorias</div>
        <div>Relatorios</div>
        <div>Vendas</div>
        <div>Estoque</div>
    </div>)
}

export default MenuMain