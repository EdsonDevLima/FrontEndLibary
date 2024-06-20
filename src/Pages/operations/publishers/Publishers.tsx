import Styles from "./publishers.module.css"
import ListData from "../../../components/listdata/listData"
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
                <input type="submit" value="Cadastrar"/>
        </form>
        <ListData/>
    </div>)


}
export default Publishers