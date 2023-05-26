import"../styles/footer.css"
function Footer(){
    return(
        <div className="footer-container">
            <img src={require("../assets/LOGOnoiretblanc.png")} className="footer-img" alt="logo" />
            <p className="footer-text">2020 Kasa. All rights reserved </p>
        </div>
    )
}
export  default Footer