import {BrowserRouter,Routes,Route} from "react-router-dom"
//pages
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register"


const AppRouter = ()=>
{

return(
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
)

}

export default AppRouter