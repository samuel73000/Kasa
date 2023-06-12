import "../../styles/index.css"
import Slideshow from "../../components/Slideshow"
import Collapse from "../../components/Collapse";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



function Logement(){
  let classbtn1 ="logement-btn";
    let classbtn2 ="logement-btn";
    let classbtn3 ="logement-btn-none";
    let classbtn4 ="logement-btn-none";
    let containercollapse ="logement-collapse-container"
    let titre1 = "Description";
    let titre2 ="Équipements";
    let classtext ="logement-texte"
    
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
    }, [id] )

   
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
          <img src={logement.host.picture} className="logement-host-picture" />
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


<Collapse classbtn1={classbtn1}  classbtn2={classbtn2} classbtn3={classbtn3}  classbtn4={classbtn4} containercollapse={containercollapse} titre1={titre1} titre2={titre2} classtext={classtext} texte1={logement.description} texte2={logement.equipments} />


        </div>
      )}
    </>
</div>
    )
}

export default Logement