import { useState,useEffect } from "react"
import Styles from "./ListBooks.module.css"
import { Link } from "react-router-dom";
import { ActiveFlashMessage } from "../../hooks/ActiveFlashMessage";
const ListBook = ()=>{
    const [ListAllBooks,setListBooks] = useState<any | undefined>();
    const [token,setToken] = useState<string>("")
    useEffect(()=>{
     const request = async ()=>{
        const Datatoken = await localStorage.getItem("token")
        setToken(Datatoken || "")
        const request = await fetch("http://localhost:3000/books/all",{headers:{"Authorization":`Bearer ${token}`}})
        const response = await request.json()
        setListBooks(response)
     }
     
     request()
    },[])




    const removeBook = async (id: any): Promise<void> => {
        const response = await fetch("http://localhost:3000/books/delete", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Authorization":`Bearer ${token}`
            },
            body: JSON.stringify({ id: id })
        });
        const data = await response.json()

        if (response.ok) {
            // Atualizar a lista de livros após a remoção
            ActiveFlashMessage(data.message,202)
            setListBooks((prevBooks: any) => ({
                ...prevBooks,
                AllBooks: prevBooks.AllBooks.filter((book: any) => book.id !== id)
            }
        ));
        } else {
            ActiveFlashMessage(data.message,500)
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
    <Link  to={`/books/${book.id}`}>Editar</Link>
    <button onClick={ async()=>{
       await removeBook(book.id)

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