import Banner from "../../components/Banner";
import Card from "../../components/Card";

function Home() {
  let imageHeader = require("../../assets/ImgBanner.png");
  let bannerTitre = "banner-titre";
  let containerBanner = "banner-container-home";
  let imageClassBanner ="banner-img-home";
  return (
    <div>
      <Banner image={imageHeader} classNameTitre={bannerTitre} container={containerBanner} imageClass={imageClassBanner} />
      <Card />
    </div>
  );
}

export default Home;
