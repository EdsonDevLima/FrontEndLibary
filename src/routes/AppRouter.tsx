import {BrowserRouter,Routes,Route} from "react-router-dom"
//pages
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register"
import Home from "../Pages/Home/Home";
//pages filhas
import Main from "../Pages/operations/main/Main";
import Publishers from "../Pages/operations/publishers/Publishers";
import Sales from "../Pages/operations/sales/Sales";
import Stoks from "../Pages/operations/stoks/Stoks";
import Books from "../Pages/operations/books/Books";
import Categories from "../Pages/operations/categories/Categories";
import BooksEdit from "../Pages/operations/books/BooksEdit";
import Reports from "../Pages/operations/reports/Reports";

//hooks


const AppRouter = ()=>
{

return(
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    
    {/*children home*/}
    {/*as rotas filhas nao pode conter a barra no path*/}
    <Route path="/home" element={<Home/>}>
        <Route index element={<Main/>}/>
        <Route path="books" element={<Books/>}/>
        <Route path="books/:id" element={<BooksEdit/>}/>
        <Route path="publishers" element={<Publishers/>}/>
        <Route path="categories" element={<Categories/>}/>
        <Route path="reports" element={<Reports/>}/>
        <Route path="sales" element={<Sales/>}/>
        <Route path="stoks" element={<Stoks/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
)

}

export default AppRouter