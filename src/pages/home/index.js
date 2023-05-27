import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import Footer from "../../components/Footer"

function Home(){
    let imageHeader = require('../../assets/ImgBanner.png');
    let bannerTitre = "banner-titre";
    return(
        <div>
        <Header />
        <Banner image={imageHeader} classNameTitre={bannerTitre} />
        <Card />
        <Footer />
        </div>
    )
    
}



export default Home