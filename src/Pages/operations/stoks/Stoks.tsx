import { useState,useEffect } from "react"
import Styles from "./stoks.module.css"
import { DataBooks } from "../../../Types/DataBooks"
import { Link } from "react-router-dom"
const Stoks = ()=>{
    const [dataBooks,setDataBooks] = useState<DataBooks[]>([])
useEffect(()=>{
    const requestBooks = async()=>{
        try{
            const request = await fetch("http://localhost:3000/books/all")
            const response = await request.json()
            setDataBooks(response.AllBooks)
        }
        catch(err){
            console.log(err)
        }


    }
    requestBooks()

},[])
    return (
   
        <section className={Styles.sectionStock} >
            <div className={Styles.listStock}>
                <h1>Estoque de livros</h1>
            {dataBooks.length > 0 ? dataBooks.map((book)=><div key={book.id + book.Name}>
                <p><span>Id:</span>{book.id}</p>
                <p><span>Nome:</span>{book.Name}</p>
                <p><span>Preço unitario:</span> R${book.PriceUnit}</p>
                <p><span>Autor:</span>{book.Author}</p>
                <p><span>Quantidade:</span>{book.Amount}</p>
                <Link to={`/books/${book.id}`}>Editar</Link>
            </div>) : <div><span>Estoque vazio</span><Link to={"/books"}>Registrar livro</Link></div>}
            </div>
        </section>
    )
}
export default Stoks