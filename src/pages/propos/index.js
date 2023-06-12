import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"

function Propos(){
    let imageHeader = require('../../assets/imgBannerPropos.png');
    let titre1 = "Fiabilité";
    let texte1 = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.";
    let titre2 ="Respect";
    let texte2 ="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    let titre3="Service";
    let texte3="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    let titre4="Sécurité";
    let texte4 ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
    let classbtn1 ="collapse-btn";
    let classbtn2 ="collapse-btn";
    let classbtn3 ="collapse-btn";
    let classbtn4 ="collapse-btn";
    let classtext ="collapse-texte";
    let containercollapse ="collapse-container"
    return(
        <div>
        <Banner image={imageHeader} />
        <Collapse titre1={titre1} texte1={texte1}  titre2={titre2} texte2={texte2} titre3={titre3} texte3={texte3} titre4={titre4} texte4={texte4} classbtn1={classbtn1}  classbtn2={classbtn2}   classbtn3={classbtn3}  classbtn4={classbtn4} containercollapse={containercollapse} classtext={classtext} />
        </div>
    )
    
}


export default Propos