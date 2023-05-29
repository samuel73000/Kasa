
import "../styles/Collapse.css"
import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Collapse(){
    let [isOpen , setOpen] = useState(false);

    return isOpen ? (
        <section >
            <button onClick={() => setOpen(false)} className='collapse-btn'>
            Fiabilité
            <img src={require("../assets/flechehaut.png")} />
            </button>
          <p className="collapse-texte">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </section>
        

    ) :(
        <section>
            <button onClick={() => setOpen(true)} className='collapse-btn'>
            Fiabilité
            <img src={require("../assets/flechebas.png")} />
            </button>
            
        </section>
    )
}
export default Collapse
