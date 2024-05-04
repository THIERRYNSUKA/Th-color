import { BrowserRouter as Router , Routes, Route, Link, NavLink, Outlet, useParams } from "react-router-dom";
import './App.css';
import Header from "./header/header";
import Footer from "./footer/footer";
import Accueil from "./pages/accueil";
import APropos from "./pages/apropos";
import Services from "./pages/service";
import Contact from "./pages/contact";
import Catalogue from "./pages/catalogue";

function App() {

  return (
    <div className="text-xl">
    <Router >
      <Header/>
        
      <main >
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/apropos" element={<APropos/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/catalogue" element={<Catalogue/>}/>
          
        </Routes>
      </main>

      <div>
        <Footer/>
      </div>
      
      </Router>
    </div>
  )
}

export default App