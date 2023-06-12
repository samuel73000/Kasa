import "../styles/index.css"
import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';







function Collapse(props) {
  const [isOpen, setIsOpen] = useState([]);

  const toggleCollapse = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };


  
  

  return (
    <section className={props.containercollapse}>
    <div>
        {isOpen[0] ? (
          <div>
            <button onClick={() => {toggleCollapse(0);}} className={props.classbtn1}>
            {props.titre1}
              <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-open" />
            </button>
            <p className={props.classtext}>{props.texte1}</p>
          </div>
        ) : (
          <button onClick={() => { toggleCollapse(0)}} className={props.classbtn1} >
            {props.titre1}
            <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-close" />
          </button>
        )}
      </div>

      <div>
        {isOpen[1] ? (
          <div>
            <button onClick={() => toggleCollapse(1)} className={props.classbtn2}>
            {props.titre2}
              <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-open" />
            </button>
            <p className={props.classtext}>{props.texte2}</p>
          </div>
        ) : (
          <button onClick={() => toggleCollapse(1)} className={props.classbtn2}>
            {props.titre2}
            <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-close" />
          </button>
        )}
      </div>

      <div>
        {isOpen[2] ? (
          <div>
            <button onClick={() => toggleCollapse(2)} className={props.classbtn3}>
            {props.titre3}
              <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-open" />
            </button>
            <p className={props.classtext}>{props.texte3}</p>
          </div>
        ) : (
          <button onClick={() => toggleCollapse(2)} className={props.classbtn3}>
            {props.titre3}
            <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-close" />
          </button>
        )}
      </div>

      <div>
        {isOpen[3] ? (
          <div>
            <button onClick={() => toggleCollapse(3)} className={props.classbtn4}>
            {props.titre4}
              <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-open" />
            </button>
            <p className={props.classtext}>{props.texte4}</p>
          </div>
        ) : (
          <button onClick={() => toggleCollapse(3)} className={props.classbtn4}>
            {props.titre4}
            <FontAwesomeIcon icon={faChevronDown} id="collapse-fleche" className="collapse-fleche-close" />
          </button>
        )}
      </div>



    </section>
  );
  }

export default Collapse;









