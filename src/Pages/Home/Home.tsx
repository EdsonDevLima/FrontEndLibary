import { Outlet } from "react-router-dom"
import MenuMain from "../../components/menuOperations/Menu"
//style
import Styles from "./Home.module.css"
//context
import { Context } from "../../context/context"
import { useContext,useEffect } from "react"

const Home = ()=>{
    const AuthContext = useContext(Context)
    
    useEffect(()=>{
        if(!AuthContext){
            console.log("erro com acesso no context")

        }else{
            const {requestTokenAutheticate} = AuthContext
            requestTokenAutheticate("login")
        }






    },[])
 return (
    <section className={Styles.section}>
        <MenuMain/>
        {/*esse outlet serve para indicar onde as pages filhas vao ser exibidas*/}
        <Outlet/>
    </section>

 )
}


export default Home