import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"

function Propos(){
    let imageHeader = require('../../assets/imgBannerPropos.png');
    let titre =["Fiabilité","Respect","Service","Sécurité"];
    let texte=["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
]
    
    return(
        <div>
        <Banner image={imageHeader} container={"banner-container-propos"} imageClass={"banner-img-propos"} />
        <Collapse titre1={titre[0]} texte1={texte[0]}  classbtn1={"collapse-btn"}  classtext={"collapse-texte"} />
        <Collapse titre1={titre[1]} texte1={texte[1]}  classbtn1={"collapse-btn"}  classtext={"collapse-texte"} />
        <Collapse titre1={titre[2]} texte1={texte[2]}  classbtn1={"collapse-btn"}  classtext={"collapse-texte"} />
        <Collapse titre1={titre[3]} texte1={texte[3]}  classbtn1={"collapse-btn"}  classtext={"collapse-texte"} />

        </div>
    )
    
}


export default Propos