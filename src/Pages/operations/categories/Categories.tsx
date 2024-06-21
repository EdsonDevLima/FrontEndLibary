import Styles from "./Categories.module.css"
const Categories = ()=>{
    return (
    <div className={Styles.sectionComponent}>
        <form>
            <h1>Nova Categoria</h1>
            <label>
                Nome da categoria:
                <input type="text" />
            </label>
            <div className={Styles.conteinerbuttons}>
                    <input type="submit" value="Salvar"/>
                    <button>Consultar lista de livro</button>                    
                </div>
        </form>
    </div>)


}
export default Categories