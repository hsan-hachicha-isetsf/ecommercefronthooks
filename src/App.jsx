import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Listarticles from "./components/admin/articles/Listarticles"
import Insertarticle from "./components/admin/articles/Insertarticle"
import Editarticle from "./components/admin/articles/Editarticle"
import Listscategories from "./components/admin/scategories/Listscategories"
import Insertcategorie from "./components/admin/categories/Insertcategorie"
import Editcategorie from "./components/admin/categories/Editcategorie"
import Insertscategorie from "./components/admin/scategories/Insertscategorie"
import Editscategorie from "./components/admin/scategories/Editscategorie"
import Listarticlescard from "./components/client/Listarticlescard"
import Menu from "./components/Menu"


function App() {
 
  return (
    <>
      <Router>
        <Menu/>
        <Routes>
        <Route path="/" element={<Listarticlescard/>}/>
          <Route path="/articles/list" element={<Listarticles/>}/>
          <Route path="/articles/add" element={<Insertarticle/>}/>
          <Route path="/articles/edit/:id" element={<Editarticle/>}/>
          <Route path="/categories/list" element={<Listscategories/>}/>
          <Route path="/categories/insert" element={<Insertcategorie/>}/>
          <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
          <Route path="/scategories/list" element={<Listscategories/>}/>
          <Route path="/scategories/insert" element={<Insertscategorie/>}/>
          <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
          <Route path="/articles/card" element={<Listarticlescard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
