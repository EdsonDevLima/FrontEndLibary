import Styles from "./Books.module.css"
import React, { useState } from "react"
const Books = ()=>{
    const [Name,setName] = useState<string>()
    const [Category,setCategory] = useState<string>()
    const [Publishe,setPublishe] = useState<string>()
    const [Author,setAuthor] = useState<string>()
    const [Amount,setAmount] = useState<string>()
    const HandleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault()
            const newBook = {Name,Category,Publishe,Author,Amount}
            console.log(newBook)
    }


    return (
        <div className={Styles.sectionComponent}>
        <form onSubmit={HandleSubmit}>
            <h1>Cadastrar livro</h1>
            <label>
                Nome do livro:
                <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} />
            </label>
            <label>
                Categorias:
                <select value={Category} onChange={(e)=>setCategory(e.target.value)}>
                    <option disabled value={"Selecione uma categoria"}>Selecione uma categoria</option>
                    <option value={"ficçao"}>Ficção</option>
                    <option value={"romance"}>Romance</option>
                    <option value={"religiao"}>Religiçao</option>
                    <option value={"terror"}>Terror</option>
                </select>
            </label>
            <label>
                Editora:
                <select  value={Publishe} onChange={(e)=>setPublishe(e.target.value)}>
                    <option disabled value={"Selecione uma Editora"}>Selecione uma Editora</option>
                    <option value={"teste"}>teste</option>
                    <option value={"ctm"}>ctm</option>
                    <option value={"givaldo som"}>givaldo som</option>
                    <option value={"lotericas caixa"}>lotericas caixa</option>
                </select>
            </label>
            <label>
                Autor:
                <input type="text"  value={Author} onChange={(e)=>setAuthor(e.target.value)}  />
            </label>
            <label>
                Quantidade:
                <input type="number"  value={Amount} onChange={(e)=>setAmount(e.target.value)}  />
            </label>
                <div className={Styles.conteinerbuttons}>
                    <input type="submit" value="Salvar"/>
                    <button>Consultar lista de livro</button>                    
                </div>

        </form>

    </div>



    )
}



export default Books