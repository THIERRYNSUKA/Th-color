import { NavLink } from "react-router-dom";


function NavBar() {
    return (
      <div >
        <div className="container mx-auto py-4 px-6 text-lg">
            <nav className="flex justify-between ">
               
                <NavLink to="/">Accueil</NavLink>
                
                <NavLink to="/apropos">A propos</NavLink>
                
                <NavLink to="/services">Services</NavLink>
                
               <NavLink to="/contact">Contact</NavLink>
               <NavLink to="/catalogue">Catalogue</NavLink>
    
            </nav>
          
        </div>
      </div>
        
    );
}

export default NavBar;