import Styles from "./publishers.module.css"
const Publishers = ()=>{
    return (
    <div className={Styles.sectionComponent}>
        <form>
            <h1>Nova publicadora</h1>
            <label>
                Nome da Editora:
                <input type="text" />
            </label>
            <label>
                Cnpj:
                <input type="text" />
            </label>
            <div className={Styles.conteinerbuttons}>
                    <input type="submit" value="Salvar"/>
                    <button>Consultar lista de Editoras</button>                    
                </div>
        </form>
    </div>)


}
export default Publishers