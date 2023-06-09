import "../styles/index.css"
import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';







function Collapse(props) {
  const [isOpen, setIsOpen] = useState([false]);

  const toggleCollapse = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };


  
  

  return (
    <section className="collapse-container">
    <div>
        {isOpen[false] ? (
          <div>
            <button onClick={() => {toggleCollapse(true);}} className={props.classbtn1}>
            {props.titre1}
            <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-open" />
            </button>
            <p className={props.classtext}>{props.texte1}</p>
          </div>
        ) : (
          <button onClick={() => { toggleCollapse(false)}} className={props.classbtn1} >
            {props.titre1}
            <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-close" />
          </button>
        )}
      </div>

    </section>
  );
  }

export default Collapse;









