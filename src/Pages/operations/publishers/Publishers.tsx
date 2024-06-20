import Styles from "./publishers.module.css"
import ListData from "../../../components/listdata/listData"
const Publishers = ()=>{
    return (
    <div className={Styles.sectionComponent}>
        <form>
            <label>
                Nome da Editora:
                <input type="text" />
            </label>
            <label>
                Cnpj:
                <input type="text" />
            </label>
                <input type="submit"/>
        </form>
        <ListData/>
    </div>)


}
export default Publishers