import React from "react"
import Styles from "./Categories.module.css"
const Categories = ()=>{

    const HandleSubmit =  async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try
        {
            const response = await fetch("http://localhost:3000/category/create",{method:"POST"})
        }
        catch(err)
        {}




    }








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
                    <button>Consultar lista de categorias</button>                    
                </div>
        </form>
    </div>)


}
export default Categories