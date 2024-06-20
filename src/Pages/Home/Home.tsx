import { Outlet } from "react-router-dom"
import MenuMain from "../../components/menuOperations/Menu"
//style
import Styles from "./Home.module.css"

const Home = ()=>{
 return (
    <section className={Styles.section}>
        <MenuMain/>
        {/*esse outlet serve para indicar onde as pages filhas vao ser exibidas*/}
        <Outlet/>
    </section>

 )
}


export default Home