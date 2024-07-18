import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Styles from "./BooksEdit.module.css"
import { DataCategory } from "../../../Types/DataCategoty"
import { DataPublisher } from "../../../Types/DataPublisher"
import { ActiveFlashMessage } from "../../../hooks/ActiveFlashMessage"




const BooksEdit = ()=>{
    const [Name,setName] = useState<string>("")
    const [Category,setCategory] = useState<string>("")
    const [Author,setAuthor] = useState<string>("")
    const [Publisher,setPublisher] = useState<string>("")
    const [PriceUnit,setPriceUnit] = useState<string>("")
    const [Amount,setAmount] = useState<string>("")
    const [SelectedFile,setSelectedFile] = useState<any | null>(null)
    const {id} = useParams()
    const Navigate = useNavigate()


//data category
    const [dataCategories,setCategories] = useState<DataCategory[]>([])
    const [dataPublisher,setDataPublisher] = useState<DataPublisher[]>([])
    useEffect(()=>{
    const request = async()=>{
        const req = await fetch(`http://localhost:3000/books/book/${id}`)
        const response = await req.json()
        const data = response.book
        setName(data.Name)
        setCategory(data.CategoryId)
        setName(data.Name)
        setAuthor(data.Author)
        setAmount(data.Amount)
        setPriceUnit(data.PriceUnit)
        setPublisher(data.Publisher)
        

    }
    const requestCategory = async ()=>{

        try
        {
        const response = await fetch("http://localhost:3000/category/all")
        const data = await response.json()
        await setCategories(data.allCategories)               
        }catch(err)
        {
            console.log(err)
        }

    }

    const requestPublisher = async()=>{

        try{            
        const response = await fetch("http://localhost:3000/publisher/all")
        const data = await response.json()
        await setDataPublisher(data.AllPublisher)
            console.log(dataPublisher)
            
        }catch(err){
            console.log(err)
        }

    }

    if(id != null || id != ""){
    request()    
    requestCategory()
    requestPublisher()
    }

},[])
    const handleSubmit = ()=>{
        ActiveFlashMessage("Registro editado com sucesso",200)
        Navigate("/books")
    }

    return(
        <div className={Styles.sectionComponent}>
            <form onSubmit={handleSubmit}>
            <h1>Editar dados de livro</h1>
            <label>
                Nome do livro:
                <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} />
            </label>
            <label>
                Categorias:
                <select value={Category} onChange={(e)=>setCategory(e.target.value)}>
                    <option disabled  value={""}>Selecione uma categoria</option>
                    {dataCategories?.map((item)=><option key={item.id + item.id} value={item.id}>{item.Name}</option>)}
                </select>
            </label>
            <label>
                Editora:
                <select  value={Publisher} onChange={(e)=>setPublisher(e.target.value)}>
                    <option disabled  value={""}>Selecione uma Editora</option>
                    {dataPublisher?.map((item)=><option key={item.id + item.id}  value={item.Name}>{item.Name}</option>)}
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
                Preço unitario:
                <input type="number" step={".01"}  value={PriceUnit} onChange={(e)=>setPriceUnit(e.target.value)} required />
            </label>
            <label>
                Imagem do livro:
                <input type="file"/>
            </label>
                <div className={Styles.conteinerbuttons}>
                    <input type="submit" value="Salvar"/>                                 
                </div>

        </form>
        </div>)
}

export default BooksEdit