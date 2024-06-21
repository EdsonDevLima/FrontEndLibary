import Styles from "./ListPublishers.module.css"
import { Link } from "react-router-dom"
const ListPublishers= ()=>{
    const publisher = [{name:"Eds Editora",id:21,cnpj:"12.345.678/0001-00"}]
    return(
    <div className={Styles.table}>
        <div className={Styles.lineTittle}>
            <div>Lista de consulta</div>
        </div>
        <div className={Styles.PrimaryLine}>
            <div>Editora</div>
            <div>Cnpj</div>
            <div>Id</div>
        </div>
        {publisher.map((item)=>        
        <div className={Styles.line}>
            <div><Link to={"/"}>{item.name}</Link></div>
            <div>{item.cnpj}</div>
            <div>{item.id}</div>
        </div>)}
    </div>
    )



}

export default ListPublishers