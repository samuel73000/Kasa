import { NavLink } from 'react-router-dom'
import "../styles/index.css"

function Header(){
    return(
        <div className='haeder-container'>
        <img src={require("../assets/LOGO.png")} alt='logo Kasa' className='header-img' />
        <nav>
            <NavLink to="/"  className={"header-accueil "} >Accueil</NavLink>
            <NavLink to="/Propos"className={"header-propos"} >A Propos</NavLink>
        </nav>
        </div>
    )
}
export default Header