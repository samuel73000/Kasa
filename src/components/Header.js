import { Link } from 'react-router-dom'
import "../styles/Header.css"

function Header(){
    return(
        <div className='haeder-container'>
        <img src={require("../assets/LOGO.png")} alt='logo Kasa' className='header-img' />
        <nav>
            <Link to="/" className='header-accueil'>Accueil</Link>
            <Link to="../pages/propos/index.js" className='haeder-propos'>Propos</Link>
        </nav>
        </div>
    )
}
export default Header