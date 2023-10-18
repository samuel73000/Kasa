import "../../styles/index.css"
import Slideshow from "../../components/Slideshow"
import Collapse from "../../components/Collapse";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Logement(){
   
  const {data} = require('../../data/AppartementList');

    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const [logement, setLogement] = useState(undefined)
    useEffect(() => {
        const current = data.find (item => item.id === id)
        if(!current){
            navigate ("/error")
        }else{
            setLogement({...current})
        }
    }, [id , data , navigate] )

   
    return(
<div>
<>
      {logement && (
        
        
        <div>
          <Slideshow images={logement.pictures}  />
          <h1 className="logement-titre">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="logement-container-profil">
          <p className="logement-name">{logement.host.name}</p>
          <img src={logement.host.picture} className="logement-host-picture" alt="logement" />
          </div>
          <div className="logement-container-tags">
          {logement.tags.map((tag, index) =>(
            <p key={index} className="logement-tags">{tag}</p>
          ))}
          </div> 

<div className="logement-container-etoile">
  {Array.from({ length: logement.rating }).map((_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className="logement-etoile logement-etoile-rouge"
    />
  ))}
  {Array.from({ length: 5 - logement.rating }).map((_, index) => (
    <FontAwesomeIcon
      key={index + logement.rating}
      icon={faStar}
      className="logement-etoile logement-etoile-grise"
    />
  ))}
</div>  



<div className="logement-container-collapse">
  <Collapse classbtn1={"logement-btn"} titre1={"Description"} classtext={"logement-texte"} texte1={logement.description} />
  <Collapse classbtn1={"logement-btn"} titre1={"Équipements"} classtext={"logement-texte2"} texte1={
  <ul>
    {logement.equipments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ul>} />  
</div>
        </div>
        
      )}
    </>
    
</div>
    )
    
}

export default Logement