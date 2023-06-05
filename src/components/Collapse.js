import "../styles/index.css"
import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';







function Collapse() {
  const [isOpen, setIsOpen] = useState([]);

  const toggleCollapse = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };


  
  

  return (
    <section>
    <div>
        {isOpen[0] ? (
          <div>
            <button onClick={() => {toggleCollapse(0);}} className="collapse-btn">
            Fiabilité
              <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-open" />
            </button>
            <p className="collapse-texte ">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </div>
        ) : (
          <button onClick={() => { toggleCollapse(0)}} className="collapse-btn" >
            Fiabilité
            <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-close" />
          </button>
        )}
      </div>

      <div>
        {isOpen[1] ? (
          <div>
            <button onClick={() => toggleCollapse(1)} className="collapse-btn">
              Respect
              <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-open" />
            </button>
            <p className="collapse-texte">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        ) : (
          <button onClick={() => toggleCollapse(1)} className="collapse-btn">
            Respect
            <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-close" />
          </button>
        )}
      </div>

      <div>
        {isOpen[2] ? (
          <div>
            <button onClick={() => toggleCollapse(2)} className="collapse-btn">
              Service
              <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-open" />
            </button>
            <p className="collapse-texte">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
          </div>
        ) : (
          <button onClick={() => toggleCollapse(2)} className="collapse-btn">
            Service
            <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-close" />
          </button>
        )}
      </div>

      <div>
        {isOpen[3] ? (
          <div>
            <button onClick={() => toggleCollapse(3)} className="collapse-btn">
              Sécurité
              <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-open" />
            </button>
            <p className="collapse-texte">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          </div>
        ) : (
          <button onClick={() => toggleCollapse(3)} className="collapse-btn">
            Sécurité
            <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-close" />
          </button>
        )}
      </div>



    </section>
  );
  }

export default Collapse;









