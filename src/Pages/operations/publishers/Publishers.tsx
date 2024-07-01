import Styles from "./publishers.module.css"
import React, { useState } from "react"
const Publishers = ()=>{
    const [Name,setName] = useState<string>("")
    const [Cnpj,setCnpj] = useState<string>("")
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
           const request =  await fetch("http://localhost:3000/publisher/create",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({Name,Cnpj})})
            console.log(request)
           const response = await request.json()
            console.log(response)
        }catch(err){
            console.log(err)
        }


    }
    return (
    <div className={Styles.sectionComponent}>
        <form onSubmit={handleSubmit}>
            <h1>Nova publicadora</h1>
            <label>
                Nome da Editora:
                <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} />
            </label>
            <label>
                Cnpj:
                <input type="text" value={Cnpj} onChange={(e)=>setCnpj(e.target.value)} />
            </label>
            <div className={Styles.conteinerbuttons}>
                    <input type="submit" value="Salvar"/>
                    <button>Consultar lista de Editoras</button>                    
                </div>
        </form>
    </div>)


}
export default Publishers