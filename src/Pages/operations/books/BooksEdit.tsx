import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Styles from "./BooksEdit.module.css"
const BooksEdit = ()=>{
    const [Name,setName] = useState<string>("")
    const [Category,setCategory] = useState<string>("")
    const [Publishe,setPublishe] = useState<string>("")
    const [Author,setAuthor] = useState<string>("")
    const [Amount,setAmount] = useState<string>()
    const {id} = useParams()    
    const [book,setBook] = useState()
    useEffect(()=>{
    const request = async()=>{
        const req = fetch()



    }






    },[])
    return(
        <div className={Styles.sectionComponent}>
            <form>
            <h1>Editar dados de livro</h1>
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
                <input type="text"  value={Author} onChange={(e)=>setAuthor(e.target.value)} required  />
            </label>
            <label>
                Quantidade:
                <input type="number"  value={Amount} onChange={(e)=>setAmount(e.target.value)} required />
            </label>
            <label>
                Imagem do livro:
                <input type="file"  onChange={(e)=>{if (e.target.files && e.target.files.length > 0){setSelectedFile(e.target.files[0])}}} required />
            </label>
                <div className={Styles.conteinerbuttons}>
                    <input type="submit" value="Salvar"/>                                 
                </div>

        </form>
        </div>)
}

export default BooksEdit