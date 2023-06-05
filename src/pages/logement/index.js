import "../../styles/index.css"
import Slideshow from "../../components/Slideshow"
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";



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
    }, [id] )
    
    
    return(
<div>
<>
      {logement && (
        <div>
          <Slideshow images={logement.pictures} />
        </div>
      )}
    </>

</div>
    )
}

export default Logement