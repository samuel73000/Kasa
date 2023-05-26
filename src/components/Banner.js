import "../styles/Banner.css"
function Banner(){
    return(
    <div className="banner-container">
        <img src={require("../assets/ImgBanner.png")}className="banner-img" />
        <h1 className="banner-titre">Chez vous, partout et ailleurs</h1>
    </div>
    
    )
}

export default Banner