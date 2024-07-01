import Styles from "./ListCategories.module.css"
import { useState,useEffect } from "react";


const ListCategories = ()=>{
    const [ListAllBooks,setListBooks] = useState<any | undefined>();
    useEffect(()=>{
     const request = async ()=>{

        const request = await fetch("http://localhost:3000/books/all")
        const response = await request.json()
        setListBooks(response)
     }
     
     request()
    },[])




    const removeBook = async (id: any): Promise<void> => {
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
            // Atualizar a lista de livros após a remoção
            setListBooks((prevBooks: any) => ({
                ...prevBooks,
                AllBooks: prevBooks.AllBooks.filter((book: any) => book.id !== id)
            }));
        } else {
            console.error("Erro ao remover livro:", response.statusText);
        }
}}

export default ListCategories