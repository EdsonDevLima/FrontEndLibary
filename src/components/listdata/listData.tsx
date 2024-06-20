import Styles from "./listData.module.css"
import { Link } from "react-router-dom"
const ListData = ()=>{
    const teste = [{name:"Edson",age:21,profile:"dev"}]
    return(
    <div className={Styles.table}>
        <div className={Styles.lineTittle}>
            <div>Lista de consulta</div>
        </div>
        <div className={Styles.PrimaryLine}>
            <div>Nome</div>
            <div>Idade</div>
            <div>Profissão</div>
        </div>
        {teste.map((item)=>        
        <div className={Styles.line}>
            <div><Link to={"/"}>{item.name}</Link></div>
            <div>{item.age}</div>
            <div>{item.profile}</div>
        </div>)}
    </div>
    )



}

export default ListData