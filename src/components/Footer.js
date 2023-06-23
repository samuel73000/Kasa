import "../styles/index.css";
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-center">
        <img
          src={require("../assets/LOGOnoiretblanc.png")}
          className="footer-img"
          alt="logo"
        />
        <p className="footer-text">2020 Kasa. All rights reserved </p>
      </div>
    </footer>
  );
}
export default Footer;
