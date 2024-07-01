import Styles from "./Books.module.css"
import React, { useState,useEffect,useContext } from "react"
//componente que eu coloquei de teste
import ListBook from "../../../components/ListBooks/ListBook"

////
import { DataCategory } from "../../../Types/DataCategoty"
import { DataPublisher } from "../../../Types/DataPublisher"
//context
import { Context } from "../../../context/context"




const Books = ()=>{
    //data form
    const [Name,setName] = useState<string>("")
    const [Category,setCategory] = useState<string>("")
    const [Publishe,setPublishe] = useState<string>("")
    const [Author,setAuthor] = useState<string>("")
    const [Amount,setAmount] = useState<string>("")
    const [PriceUnit,setPriceUnit] = useState<string>("")
    const [SelectedFile,setSelectedFile] = useState<any | null>(null)
    //data category
    const [dataCategories,setCategories] = useState<DataCategory[]>([])
    const [dataPublisher,setDataPublisher] = useState<DataPublisher[]>([])
    //context
    const AuthContext = useContext(Context)
    
    
    useEffect(()=>{
        if(!AuthContext){
            console.log("erro com acesso no context")

        }else{
            const {requestTokenAutheticate} = AuthContext
            requestTokenAutheticate("login")
        }

        const requestCategory = async ()=>{
            try
            {
            const response = await fetch("http://localhost:3000/category/all")
            const data = await response.json()
            await setCategories(data.allCategories) 
            console.log(dataCategories)               
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
        requestCategory()
        requestPublisher()
    },[])



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
            Data.append("Amount",Amount)
            Data.append("CategoryId",Category)
            Data.append("Publisher",Publishe)
            Data.append("PriceUnit",PriceUnit)
            Data.append("file",SelectedFile)
            try{
                const request = await fetch("http://localhost:3000/books/create",{method:"POST",body:Data})
                const response = await request.json()
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
                    <option disabled  value={""}>Selecione uma categoria</option>
                    {dataCategories?.map((item)=><option key={item.id + item.id} value={item.id}>{item.Name}</option>)}
                </select>
            </label>
            <label>
                Editora:
                <select  value={Publishe} onChange={(e)=>setPublishe(e.target.value)}>
                    <option disabled  value={""}>Selecione uma Editora</option>
                    {dataPublisher?.map((item)=><option key={item.id + item.id}  value={item.Name}>{item.Name}</option>)}
                </select>
            </label>
            <label>
                Autor:
                <input type="text"  value={Author} onChange={(e)=>setAuthor(e.target.value)} />
            </label>
            <label>
                Quantidade:
                <input type="number"  value={Amount} onChange={(e)=>setAmount(e.target.value)}/>
            </label>
            <label>
                Preço unitario:
                <input type="number" step={".01"}  value={PriceUnit} onChange={(e)=>setPriceUnit(e.target.value)}/>
            </label>
            <label>
                Imagem do livro:
                <input type="file"  onChange={(e)=>{if (e.target.files && e.target.files.length > 0){setSelectedFile(e.target.files[0])}}} />
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