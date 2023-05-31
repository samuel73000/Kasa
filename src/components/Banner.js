import "../styles/index.css"
function Banner(props){
   
    return(
    <div className="banner-container">
        <img src={props.image} className="banner-img" alt="bannier"/>
        <h1 className={props.classNameTitre}>Chez vous, partout et ailleurs</h1>
    </div>
    
    )
}

export default Banner
