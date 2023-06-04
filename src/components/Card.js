import "../styles/index.css"
import { Link } from 'react-router-dom'
function Card(){
        const {data} = require('../data/AppartementList');
    let cards = [];
    for(let i =0;i < data.length; i++){
        cards.push( <Link to={`/logement/${data[i].id}`} >  <img src= {data[i].cover} className="card-img" alt="photo de logement"/>  </Link>   )
        cards.push(<p className="card-text">{data[i].title}</p> )
    }
return(
    <div className="Card-container">
        {cards}
    </div>
    
)
    }

export default Card