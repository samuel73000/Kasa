import"../styles/index.css"
function Footer(){
    return(
        <footer className="footer-container">
            <img src={require("../assets/LOGOnoiretblanc.png")} className="footer-img" alt="logo" />
            <p className="footer-text">2020 Kasa. All rights reserved </p>
        </footer>
    )
}
export  default Footer