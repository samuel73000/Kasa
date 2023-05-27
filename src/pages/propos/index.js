import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
function Propos(){
    let imageHeader = require('../../assets/imgBannerPropos.png')
    return(
        <div>
        <Header />
        <Banner image={imageHeader} />
        <Collapse />
        </div>
    )
    
}


export default Propos