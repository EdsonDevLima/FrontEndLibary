import Styles from "./listData.module.css"
const ListData = ()=>{
    const teste = [{name:"Edson",age:21,profile:"dev"}]
    return(
    <div className={Styles.table}>
        <div className={Styles.line}>
            <div>Nome</div>
            <div>Idade</div>
            <div>Profissão</div>
        </div>
        {teste.map((item)=>        
        <div className={Styles.line}>
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.profile}</div>
        </div>)}
    </div>
    )



}

export default ListData