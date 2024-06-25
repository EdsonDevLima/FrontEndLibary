import { useState,useEffect } from "react"
import Styles from "./ListBooks.module.css"
import { Link } from "react-router-dom";
const ListBook = ()=>{
    const [ListAllBooks,setListBooks] = useState<any | undefined>();
    useEffect(()=>{
     const request = async ()=>{

        const request = await fetch("http://localhost:3000/books/all")
        const response = await request.json()
        setListBooks(response)
     }
     
     request()
    },[])
    console.log(ListAllBooks)
    return (
    <div className={Styles.ConteinerList}>
        <div className={Styles.list}>
            <h1>Tela de consulta</h1>
        <table>    
        <tr className={Styles.tittleList}>
            <th>ID</th>
            <th>NOME</th>
            <th>AUTHOR</th>
            <th>EDITORA</th>
            <th>QTD</th>
            <th>AÇÕES</th>
        </tr>
        {ListAllBooks ? ListAllBooks.AllBooks.map((book:any)=>{


return(
<tr key={book.id}>
<th>{book.id}</th>
<th>{book.Name}</th>
<th>{book.Author}</th>
<th>EDITORA</th>
<th>{book.amount}</th>
<th>
    <Link  to={`/home/books/edit`}>Editar</Link>
    <Link  to={`/home/books/remove`}>Remover</Link>
</th>
</tr>
)
















        }) : <p>Nenhum livro cadastrado</p>}



        </table>
        </div>
    </div>)

}

export default ListBook