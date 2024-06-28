import Styles from "./Reports.module.css"

const Reports= ()=>{
    return (
    <section className={Styles.sectionsReports}>
        <form>
            <h1>Relatorio de venda</h1>
            <label>Data de entrada<input type="date" /></label>
            <label>Data de saida<input type="date" /></label>
            <input type="submit" value={"imprimir"}/>
        </form>
        <form>
            <h1>Relatorio de estoque</h1>
            <label>Data de entrada<input type="date" /></label>
            <label>Data de saida<input type="date" /></label>
            <input type="submit" value={"imprimir"}/>
        </form>
    </section>
    )


}
export default Reports