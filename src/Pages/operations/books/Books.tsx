import Styles from "./Books.module.css"
import React, { useState } from "react"
//componente que eu coloquei de teste
import ListBook from "../../../components/ListBooks/ListBook"

const Books = ()=>{
    const [Name,setName] = useState<string>("")
    const [Category,setCategory] = useState<string>("")
    const [Publishe,setPublishe] = useState<string>("")
    const [Author,setAuthor] = useState<string>("")
    const [Amount,setAmount] = useState<string>("")
    const [SelectedFile,setSelectedFile] = useState<any | null>(null)
    //mecanismos
    const [DisplaylistBooks,setDisplayList] = useState<boolean>(false)
    const Displaylist = ():void=>{
        if(DisplaylistBooks){
            setDisplayList(false)
        }
        else{
            setDisplayList(true)
        }
    }


    const HandleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault()
            const Data = new FormData()
            Data.append("Name",Name)
            Data.append("Author",Author)
            Data.append("amount",Amount)
            Data.append("CategoryId",Category)
            Data.append("file",SelectedFile)
            try{
                const request = await fetch("http://localhost:3000/books/create",{method:"POST",body:Data})
                const response = await request.json()
                console.log(Data)
                console.log(response)
            }catch(err){
                console.log(err)
            }

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
                    <button onClick={Displaylist}>Consultar lista de livro</button>     
                                  
                </div>

        </form>
        {DisplaylistBooks &&( <>
        <ListBook/>
        <button className={Styles.buttonCloseList} onClick={Displaylist}>voltar</button>
        </>) }
        
    </div>



    )
}



export default Books