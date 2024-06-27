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

    const removeBook = async ({ id }:{id:any}) => {
        const response = await fetch("http://localhost:3000/books/delete", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        });
    
        if (response.ok) {
            const data = await response.json();
            console.log("Livro removido com sucesso:", data);
        } else {
            console.error("Erro ao remover livro:", response.statusText);
        }
    };





    
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
    <Link  to={`/home/books/${book.id}`}>Editar</Link>
    <button onClick={()=>{
        removeBook(book.id)

        }}>Remover</button>
</th>
</tr>
)
















        }) : <p>Nenhum livro cadastrado</p>}



        </table>
        </div>
    </div>)

}

export default ListBook