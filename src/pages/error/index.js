import "../../styles/index.css";
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function Error(){
    return(
<div >
<Header />
<div className="error-container">
<h1 className="error-titre">404</h1>
<p className="error-texte" >Oups! La page que vous demandez n'existe pas.</p>
<Link to="/"  className={"error-link"} >Retourner sur la page d’accueil</Link>
</div>
<Footer />
</div>
    )
}

export default Error