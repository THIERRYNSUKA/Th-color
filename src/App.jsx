import { BrowserRouter as Router , Routes, Route, Link, NavLink, Outlet, useParams } from "react-router-dom";
import './App.css';
import Header from "./header/header";
import Footer from "./footer/footer";


function App() {

  return (
    <>
    <Router >
      <Header/>
        
      <main >
        <Routes>
          {/* <Route path="/" element={<Accueil/>}/> */}
          
        </Routes>
      </main>

      <div>
        <Footer/>
      </div>
      
      </Router>
    </>
  )
}

export default App