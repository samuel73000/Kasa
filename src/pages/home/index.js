import Banner from "../../components/Banner"
import Card from "../../components/Card"



function Home(){
    let imageHeader = require('../../assets/ImgBanner.png');
    let bannerTitre = "banner-titre";
    return(
        <div>
        <Banner image={imageHeader} classNameTitre={bannerTitre} />
        <Card />
        </div>
    )
    
}



export default Home