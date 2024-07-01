import React, { useState } from "react";
import Styles from "./Categories.module.css";


const Categories = () => {
    const [CategoryName, setCategoryName] = useState<string>("");

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!CategoryName) {
            console.log("campo vazio");
            return;
        }
        try {
            const request = await fetch("http://localhost:3000/category/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ Name: CategoryName })
            });
            const response = await request.json();
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={Styles.sectionComponent}>
            <form onSubmit={HandleSubmit}>
                <h1>Nova Categoria</h1>
                <label>
                    Nome da categoria:
                    <input type="text" value={CategoryName} onChange={(e) => setCategoryName(e.target.value)} />
                </label>
                <div className={Styles.conteinerbuttons}>
                    <input type="submit" value="Salvar" />
                    <button type="button">Consultar lista de categorias</button>                    
                </div>
            </form>
        </div>
    );
};

export default Categories;